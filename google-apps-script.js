/**
 * Google Apps Script — 문의하기 + 뉴스레터 구독
 *
 * 📌 설정 방법:
 * 1. Google Sheets에서 스프레드시트 열기
 * 2. 상단 메뉴 → 확장 프로그램 → Apps Script
 * 3. 이 코드를 전체 복사해서 붙여넣기
 * 4. 배포 → 새 배포 → 유형: 웹 앱
 *    - 실행 주체: 본인
 *    - 액세스 권한: 모든 사용자
 * 5. 기존 배포가 있으면: 배포 관리 → 연필 아이콘 → 새 버전 → 배포
 */

// 🔒 민감 정보는 스크립트 속성에서 불러오기
// Apps Script 에디터 → 프로젝트 설정 → 스크립트 속성에서 아래 키들을 등록하세요
const props = PropertiesService.getScriptProperties();
const SHEET_ID = props.getProperty('SHEET_ID');
const SLACK_WEBHOOK_URL = props.getProperty('SLACK_WEBHOOK_URL');
const STIBEE_API_KEY = props.getProperty('STIBEE_API_KEY');
const STIBEE_LIST_ID = props.getProperty('STIBEE_LIST_ID');
const STIBEE_GROUP_ID = props.getProperty('STIBEE_GROUP_ID');
const NEWSLETTER_SHEET = '뉴스레터 신청자';

// 문의하기 시트 이름
const MAIN_SHEET = '전체문의';
const MARKETING_SHEET = '광고수신동의';

// 문의유형 → 솔루션 시트 매핑
const SOLUTION_SHEET_MAP = {
  '앱 시장·경쟁사 분석': '모바일인덱스',
  '광고 성과 측정': '애드브릭스',
  'AI CRM·개인화 마케팅': '디파이너리',
  '핵심 고객 타겟 광고': '트레이딩웍스360',
  'TV 시청률·광고 분석': 'TV INDEX',
  'AI 광고 영상 제작': '픽스타입',
  'AI 광고 소재 제작': '픽스폴리오',
  '리워드 광고': '애드팝콘 리워드',
  '매체 수익화(SSP)': '애드팝콘 SSP',
  '기타': '기타',
};

const CONTACT_HEADERS = [
  '접수일시', '이름', '이메일', '전화', '회사명', '부서명',
  '문의유형', '개인정보동의', '마케팅동의', '추가문의 제목', '추가문의 내용',
];

// ── 메인 진입점 ──
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.type === 'newsletter') {
      return handleNewsletter(data);
    }

    return handleContact(data);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ── 뉴스레터 구독 처리 ──
function handleNewsletter(data) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

  // 스프레드시트에 기록
  var sheet = ss.getSheetByName(NEWSLETTER_SHEET);
  if (sheet) {
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['신청일시', '이메일']);
    }
    sheet.appendRow([timestamp, data.email]);
  }

  // 스티비 주소록에 구독자 추가
  UrlFetchApp.fetch('https://api.stibee.com/v1/lists/' + STIBEE_LIST_ID + '/subscribers', {
    method: 'post',
    contentType: 'application/json',
    headers: { 'AccessToken': STIBEE_API_KEY },
    payload: JSON.stringify({
      eventOccurredBy: 'SUBSCRIBER',
      confirmEmailYN: 'N',
      groupIds: [STIBEE_GROUP_ID],
      subscribers: [{ email: data.email }],
    }),
  });

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ── 문의하기 처리 ──
function handleContact(data) {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

  var row = [
    timestamp,
    data.name || '',
    data.email || '',
    data.phone || '',
    data.company || '',
    data.department || '',
    data.inquiryTypes || '',
    data.privacy || '',
    data.marketing || '',
    data.additionalTitle || '',
    data.message || '',
  ];

  // 1) 전체문의 시트에 추가
  appendToSheet(ss, MAIN_SHEET, row);

  // 2) 마케팅 동의 → 광고수신동의 시트
  if (data.marketing === 'Y') {
    appendToSheet(ss, MARKETING_SHEET, row);
  }

  // 3) 솔루션별 시트에 추가
  var inquiryTypes = (data.inquiryTypes || '').split(',').map(function(s) { return s.trim(); });
  inquiryTypes.forEach(function(type) {
    var sheetName = SOLUTION_SHEET_MAP[type];
    if (sheetName) {
      appendToSheet(ss, sheetName, row);
    }
  });

  // 4) 슬랙 알림
  sendSlackNotification(data, timestamp);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ── 시트에 행 추가 ──
function appendToSheet(ss, sheetName, row) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) return;
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONTACT_HEADERS);
  }
  sheet.appendRow(row);
}

// ── 슬랙 알림 ──
function sendSlackNotification(data, timestamp) {
  var message = {
    text: '📩 새로운 문의가 접수되었습니다!',
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: '📩 새로운 문의 접수' } },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: '*이름:*\n' + (data.name || '-') },
          { type: 'mrkdwn', text: '*회사:*\n' + (data.company || '-') },
          { type: 'mrkdwn', text: '*이메일:*\n' + (data.email || '-') },
          { type: 'mrkdwn', text: '*전화:*\n' + (data.phone || '-') },
          { type: 'mrkdwn', text: '*부서:*\n' + (data.department || '-') },
          { type: 'mrkdwn', text: '*문의유형:*\n' + (data.inquiryTypes || '-') },
        ]
      },
      { type: 'section', text: { type: 'mrkdwn', text: '*추가문의 제목:*\n' + (data.additionalTitle || '(없음)') } },
      { type: 'section', text: { type: 'mrkdwn', text: '*추가문의 내용:*\n' + (data.message || '(없음)') } },
      { type: 'context', elements: [{ type: 'mrkdwn', text: '접수일시: ' + timestamp }] }
    ]
  };

  UrlFetchApp.fetch(SLACK_WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(message),
  });
}
