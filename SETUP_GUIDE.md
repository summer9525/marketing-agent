# 홈페이지 연동 설정 가이드

현재 홈페이지에는 아래 기능이 연동되어 있습니다.
코드 배포 후 별도 개발 없이 동작하며, 설정값 변경이 필요할 때 이 가이드를 참고하세요.

---

## 1. 문의하기 → 구글 스프레드시트

문의 폼 제출 시 스프레드시트에 자동 저장됩니다.

**시트 구조:**
- 전체문의: 모든 문의
- 광고수신동의: 마케팅 수신 동의한 건만
- 솔루션별 시트: 문의유형에 따라 자동 분배 (모바일인덱스, 애드브릭스, 디파이너리, 트레이딩웍스360, TV INDEX, 픽스타입, 픽스폴리오, 애드팝콘 리워드, 애드팝콘 SSP, 기타)
- 뉴스레터 신청자: 뉴스레터 구독자 기록

**스프레드시트를 변경하고 싶을 때:**
1. 구글 스프레드시트의 Apps Script 에디터 열기 (확장 프로그램 → Apps Script)
2. 코드 상단의 `SHEET_ID` 값을 새 스프레드시트 ID로 변경
3. 배포 관리 → 연필 아이콘 → 새 버전 선택 → 배포

**시트 탭 이름을 변경하고 싶을 때:**
- Apps Script 코드에서 `MAIN_SHEET`, `MARKETING_SHEET`, `SOLUTION_SHEET_MAP` 값을 수정
- 스프레드시트의 실제 시트 탭 이름과 동일하게 맞춰야 합니다

---

## 2. 문의하기 → 슬랙 알림

문의 접수 시 슬랙 채널로 알림이 전송됩니다. (뉴스레터 구독은 슬랙 알림 없음)

**알림 채널을 변경하고 싶을 때:**
1. https://api.slack.com/apps 에서 앱 선택
2. Incoming Webhooks → 새 채널로 Webhook 추가
3. 새 Webhook URL 복사
4. Apps Script 코드에서 `SLACK_WEBHOOK_URL` 값을 새 URL로 변경
5. 배포 관리 → 새 버전으로 배포

**알림 내용을 변경하고 싶을 때:**
- Apps Script 코드의 `sendSlackNotification` 함수 내용 수정
- 잘 모르겠으면 Kiro에게 "슬랙 알림 내용 바꿔줘"라고 말하면 됩니다 😊

---

## 3. 뉴스레터 구독 → 스티비 + 스프레드시트

메인 페이지 하단 뉴스레터 구독 시 스티비 주소록에 추가되고, 스프레드시트 "뉴스레터 신청자" 시트에도 기록됩니다.

**스티비 주소록/그룹을 변경하고 싶을 때:**
1. Apps Script 코드에서 아래 값 수정:
   - `STIBEE_LIST_ID`: 주소록 ID (스티비 URL에서 확인)
   - `STIBEE_GROUP_ID`: 그룹 ID (스티비 URL에서 확인)
2. 배포 관리 → 새 버전으로 배포

**스티비 API 키를 변경하고 싶을 때:**
- Apps Script 코드에서 `STIBEE_API_KEY` 값 수정
- 스티비 → 워크스페이스 설정 → API 키에서 새 키 생성 가능

---

## 4. OG Tag (링크 공유 시 미리보기)

카카오톡, 슬랙 등에서 링크 공유 시 보이는 제목/설명/이미지입니다.

**변경할 파일:** `index.html`

> ⚠️ 이 파일은 크롬에서 직접 열면 빈 화면만 보입니다. Kiro(코드 에디터)에서 열거나, Kiro에게 수정을 요청하세요.

**현재 설정값:**
- 제목: `IGAWorks`
- 설명: `AI가 창조한 완벽한 디지털 페르소나, 아이지에이웍스가 마케팅의 다음 단계를 엽니다.`
- 썸네일: `/og-image.png`

**제목 변경:**
```html
<meta property="og:title" content="여기에 제목">
<meta name="twitter:title" content="여기에 제목">
```

**설명 변경:**
```html
<meta property="og:description" content="여기에 설명">
<meta name="twitter:description" content="여기에 설명">
```

**썸네일 이미지 변경:**
1. 새 이미지를 `public` 폴더에 저장 (권장 사이즈: 1200x630px)
2. `index.html`에서 아래 부분의 파일명 수정:
```html
<meta property="og:image" content="/새파일명.png">
<meta name="twitter:image" content="/새파일명.png">
```

**참고:** OG 정보는 배포 후에만 정상 동작합니다. 카카오톡은 캐시가 있어서 변경 후 바로 안 보일 수 있고, https://developers.kakao.com/tool/debugger/sharing 에서 캐시 초기화할 수 있습니다.

---

## 5. 파비콘 (브라우저 탭 아이콘)

**변경할 파일:** `index.html`

1. 새 아이콘 이미지를 `public` 폴더에 저장 (정사각형 PNG 권장)
2. `index.html`에서 아래 부분 수정:
```html
<link rel="icon" type="image/png" href="/새파일명.png" />
```

---

## 6. GNB(상단 메뉴) 링크

**변경할 파일:** `src/components/Navbar.tsx`

현재 구성:
- About → `/about` (내부 페이지)
- Solution → `/solutions` (내부 페이지)
- Blog → https://www.igaworksblog.com/ (외부 링크, 새 탭)
- 문의하기 버튼 → `/contact` (내부 페이지)

링크를 추가/수정하려면 파일 상단의 `navLinks` 배열을 수정하면 됩니다.

---

## 7. 푸터 링크

**변경할 파일:** `src/components/Footer.tsx`

현재 구성:
- **서비스:** 공식 블로그, 개인정보 처리방침(`/privacy`), 저작권 정책(`/copyright`)
- **솔루션:** 애드브릭스, 디파이너리, 모바일인덱스, 트레이딩웍스, 애드팝콘, TV INDEX, 픽스타입, 픽스폴리오
- **소셜 미디어:** 페이스북, 링크드인
- **채용:** 진행 중인 공고 (GreetingHR)
- **문의:** 솔루션 문의 (`/contact`)

링크를 추가/수정하려면 파일 상단의 `footerLinks` 객체를 수정하면 됩니다.

---

## 8. 개인정보 처리방침 / 저작권 정책 페이지

- 개인정보 처리방침: `src/pages/Privacy.tsx` → `/privacy` 경로
- 저작권 정책: `src/pages/Copyright.tsx` → `/copyright` 경로

기존 igaworks.com의 내용을 그대로 옮겨놓았습니다.
같은 도메인으로 배포하면 다른 솔루션 사이트들에서 걸어둔 링크도 자연스럽게 유지됩니다.

내용을 수정하려면 해당 `.tsx` 파일을 직접 수정하면 됩니다.
잘 모르겠으면 Kiro에게 "개인정보 처리방침 내용 수정해줘"라고 말하면 됩니다 😊

---

## 공통: Apps Script 배포 방법

스프레드시트, 슬랙, 스티비 관련 설정을 변경한 후에는 반드시 새 버전으로 배포해야 변경사항이 반영됩니다.

1. Apps Script 에디터에서 코드 수정
2. 상단 메뉴 → **배포** → **배포 관리**
3. **연필(수정) 아이콘** 클릭
4. 버전을 **"새 버전"** 으로 선택
5. **배포** 클릭

---

## 참고

- `google-apps-script.js` 파일은 GitHub에 보관용으로 있는 참고 파일입니다. 실제 동작하는 코드는 Google Apps Script 에디터에 있습니다.
- 코드 수정이 어려운 부분은 Kiro에게 물어보세요! 😊
