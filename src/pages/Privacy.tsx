import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-screen-md mx-auto px-6">
          <motion.h1
            className="text-heading1 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            개인정보처리방침
          </motion.h1>

          <motion.div
            className="prose prose-sm max-w-none text-body2 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-body2 mb-8">
              주식회사 아이지에이웍스(이하 '아이지에이웍스'라 함)는 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여 적법하게 개인정보를 처리하고
              안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한
              고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>

            {/* 제1조 */}
            <h2 className="text-heading3 mt-12 mb-4">제1조 (정의, 목적 및 적용 범위)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-body2">
              <li>
                본 개인정보처리방침에 사용된 용어는 아래에 정의된 의미를 가집니다.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>"개인정보"는 「개인정보 보호법」 제2조 제1호에 따라 개인정보로 인정되는 정보를 의미합니다.</li>
                  <li>"비식별정보"는 개인을 식별할 수 없도록 처리되었거나 다른 정보와 쉽게 결합하여 개인을 식별할 수 없는 비개인정보를 의미합니다.</li>
                  <li>여기에 별도로 정의되지 아니한 용어는 「개인정보 보호법」, 같은 법 시행령 및 시행규칙, 「개인정보의 안전성 확보조치 기준」 및 「표준 개인정보 보호지침」 등에 정의된 바에 따릅니다.</li>
                </ul>
              </li>
              <li>본 개인정보처리방침은 개인정보의 수집, 이용, 처리 등의 절차 및 기준을 안내하는데 그 목적이 있습니다.</li>
              <li>본 개인정보처리방침은 개인정보에 대하여 적용됩니다.</li>
              <li>
                아이지에이웍스는 다음의 목적을 위하여 최소한의 개인정보를 수집하여 처리합니다.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>가) 문의 내용 확인 및 상담: 이용자의 문의사항 확인, 본인 식별·인증, 문의·상담 내역 기록 및 관리, 서비스 관련 안내 및 답변 제공, 처리 결과 통보</li>
                  <li>나) 회원가입 및 회원정보 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지</li>
                  <li>다) 재화 또는 서비스 제공 및 민원 처리: 서비스(DFINERY, MOBILEINDEX, TV INDEX, FIXFOLIO) 제공, 계약서 발송 및 체결, 민원 확인 및 처리결과 통보</li>
                  <li>라) 요금 정산 처리: 서비스 이용 요금 정산</li>
                  <li>마) 서비스에의 활용: DFINERY 솔루션을 통한 광고성과의 측정 및 분석, CRM 메시지 발송 등</li>
                  <li>바) 마케팅 및 광고에의 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공, 서비스 이용 통계</li>
                </ul>
              </li>
            </ol>

            {/* 제2조 */}
            <h2 className="text-heading3 mt-12 mb-4">제2조 (개인정보의 처리목적, 수집항목, 보유기간)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-body2">
              <li>아이지에이웍스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</li>
              <li>
                각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                <div className="overflow-x-auto mt-3">
                  <table className="w-full text-sm border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-3 py-2 text-left">근거 법령</th>
                        <th className="border border-border px-3 py-2 text-left">항목</th>
                        <th className="border border-border px-3 py-2 text-left">보유기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-border px-3 py-2">통신비밀보호법</td><td className="border border-border px-3 py-2">서비스 이용기록, 접속기록, 접속IP정보</td><td className="border border-border px-3 py-2">3개월</td></tr>
                      <tr><td className="border border-border px-3 py-2">통신비밀보호법</td><td className="border border-border px-3 py-2">그 외의 통신사실확인자료</td><td className="border border-border px-3 py-2">12개월</td></tr>
                      <tr><td className="border border-border px-3 py-2">전자상거래법</td><td className="border border-border px-3 py-2">표시/광고에 관한 기록</td><td className="border border-border px-3 py-2">6개월</td></tr>
                      <tr><td className="border border-border px-3 py-2">전자상거래법</td><td className="border border-border px-3 py-2">계약 또는 청약철회 등에 관한 기록</td><td className="border border-border px-3 py-2">5년</td></tr>
                      <tr><td className="border border-border px-3 py-2">전자상거래법</td><td className="border border-border px-3 py-2">소비자의 불만 또는 분쟁처리에 관한 기록</td><td className="border border-border px-3 py-2">3년</td></tr>
                      <tr><td className="border border-border px-3 py-2">국세기본법 등</td><td className="border border-border px-3 py-2">거래에 관한 장부 및 증빙 서류</td><td className="border border-border px-3 py-2">5년</td></tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ol>

            {/* 제3조 */}
            <h2 className="text-heading3 mt-12 mb-4">제3조 (개인정보의 제3자 제공)</h2>
            <p className="text-body2 mb-3">
              아이지에이웍스는 정보주체의 개인정보를 처리 목적으로 명시한 범위를 초과하여 제3자에게 제공하지 않습니다.
              다만, 「개인정보 보호법」 제18조 제2항 등 다른 법령에 특별한 규정이 있는 경우 또는 재난, 감염병 등 긴급상황 발생 시
              법률에서 규정한 적법한 절차에 따라 정보주체의 개인정보를 동의 없이 제공할 수 있습니다.
            </p>

            {/* 제4조 */}
            <h2 className="text-heading3 mt-12 mb-4">제4조 (개인정보 처리 위탁)</h2>
            <p className="text-body2 mb-3">아이지에이웍스는 원활한 서비스 제공을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
            <div className="overflow-x-auto mt-3 mb-4">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-3 py-2 text-left">위탁 업무</th>
                    <th className="border border-border px-3 py-2 text-left">수탁기관</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border px-3 py-2">데이터 보관 / 전산시스템 운용, 관리</td><td className="border border-border px-3 py-2">Amazon Web Service</td></tr>
                  <tr><td className="border border-border px-3 py-2">홈페이지 이용자 통계 및 서비스 개선</td><td className="border border-border px-3 py-2">Google</td></tr>
                  <tr><td className="border border-border px-3 py-2">CRM 솔루션</td><td className="border border-border px-3 py-2">Pipedrive</td></tr>
                  <tr><td className="border border-border px-3 py-2">고객응대</td><td className="border border-border px-3 py-2">Zendesk</td></tr>
                  <tr><td className="border border-border px-3 py-2">디파이너리 이용대금 정산</td><td className="border border-border px-3 py-2">㈜스텝페이</td></tr>
                  <tr><td className="border border-border px-3 py-2">카카오톡 비즈메시지 발송</td><td className="border border-border px-3 py-2">㈜카카오</td></tr>
                  <tr><td className="border border-border px-3 py-2">모바일인덱스 이용대금 정산</td><td className="border border-border px-3 py-2">㈜다날</td></tr>
                  <tr><td className="border border-border px-3 py-2">FIXFOLIO 이용대금 결제 연동</td><td className="border border-border px-3 py-2">주식회사 코리아포트원</td></tr>
                </tbody>
              </table>
            </div>

            {/* 제5조 */}
            <h2 className="text-heading3 mt-12 mb-4">제5조 (개인정보의 국외 이전)</h2>
            <p className="text-body2 mb-3">
              아이지에이웍스는 정보주체의 개인정보를 국외의 다른 사업자에게 제공하지 않습니다.
              다만, 정보통신서비스의 제공에 관한 계약 이행 및 이용자 편의 증진 등을 위하여 클라우드 서버를 사용함에 따라 개인정보 처리업무를 국외에 전송하고 있습니다.
            </p>

            {/* 제6조 */}
            <h2 className="text-heading3 mt-12 mb-4">제6조 (정보주체의 권리 및 행사 절차)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-body2">
              <li>정보주체는 아이지에이웍스에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
              <li>개인정보 열람 요구 시 「개인정보 보호법」 제35조 제4항에 따라 열람이 제한될 수 있습니다.</li>
              <li>정보주체는 개인정보를 직접 정정·삭제하거나 아이지에이웍스에게 정정·삭제를 요구할 수 있습니다.</li>
              <li>아이지에이웍스가 보유하고 있는 개인정보에 대하여 처리정지를 요구할 수 있습니다.</li>
              <li>권리 행사는 서면, 전화, 전자우편, 모사전송(FAX)을 통하여 하실 수 있습니다.</li>
              <li>권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.</li>
            </ol>

            {/* 제7조 */}
            <h2 className="text-heading3 mt-12 mb-4">제7조 (개인정보의 파기)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-body2">
              <li>아이지에이웍스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
              <li>
                개인정보 파기의 절차 및 방법은 다음과 같습니다.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>파기절차: 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 파기합니다.</li>
                  <li>파기방법: 전자적 파일은 기록을 재생할 수 없도록 파기하며, 종이 문서는 분쇄기로 분쇄하거나 소각합니다.</li>
                  <li>분리보관: 다른 법령에 따라 보존이 필요한 개인정보는 별도로 분리하여 저장·관리합니다.</li>
                </ul>
              </li>
            </ol>

            {/* 제8조 */}
            <h2 className="text-heading3 mt-12 mb-4">제8조 (가명정보의 처리)</h2>
            <p className="text-body2">
              아이지에이웍스는 「개인정보 보호법」 제28조의2, 제28조의3에 근거하여 가명정보를 통계작성, 과학적 연구, 공익적 기록 보존 등의 목적으로 처리하며,
              가명정보가 재식별되지 않도록 분리하여 별도 저장·관리하고 처리 및 보유기간 경과 시 해당 정보를 즉시 파기합니다.
            </p>

            {/* 제9조 */}
            <h2 className="text-heading3 mt-12 mb-4">제9조 (개인정보의 안전성 확보 조치)</h2>
            <p className="text-body2 mb-3">아이지에이웍스는 「개인정보 보호법」 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-body2">
              <li>기술적 조치: 개인정보 암호화, 백신프로그램 운영, 보안장치 채택, 침입차단시스템 운영</li>
              <li>관리적 조치: 개인정보 접근 권한 제한, 정기적 보안 교육, 정보 보호 서약서 작성, 비밀번호 주기적 재설정</li>
              <li>물리적 조치: 출입통제시스템 운영</li>
            </ul>

            {/* 제10조 */}
            <h2 className="text-heading3 mt-12 mb-4">제10조 (개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-body2">
              <li>
                아이지에이웍스는 이용자에게 개별적인 웹사이트 맞춤서비스를 제공하기 위해 '쿠키(cookie)'를 사용합니다.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>쿠키의 사용 목적: 이용자의 접속 빈도나 방문 시간, 이용 행태 등의 분석</li>
                  <li>쿠키의 설치·운영 및 거부: 회원은 웹 브라우저의 옵션을 설정하여 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</li>
                </ul>
              </li>
              <li>
                이용자는 쿠키를 통한 개인 맞춤형 서비스를 차단할 수 있습니다.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Microsoft Edge: 설정 &gt; 쿠키 및 사이트 권한</li>
                  <li>Chrome: 설정 &gt; 개인 정보 보호 및 보안</li>
                  <li>Safari: 설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹사이트 데이터</li>
                  <li>Firefox: 설정 &gt; 개인정보 보호 &gt; 쿠키와 캐시</li>
                  <li>Android: 설정 &gt; 개인정보 보호 &gt; 광고 &gt; 광고 ID 재설정 또는 삭제</li>
                  <li>iOS: 설정 &gt; 개인정보 보호 및 보안 &gt; APPLE 광고 &gt; 개인 맞춤형 광고(OFF)</li>
                </ul>
              </li>
            </ol>

            {/* 제11조 */}
            <h2 className="text-heading3 mt-12 mb-4">제11조 (개인정보 보호책임자)</h2>
            <div className="overflow-x-auto mt-3 mb-4">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-3 py-2 text-left">구분</th>
                    <th className="border border-border px-3 py-2 text-left">소속</th>
                    <th className="border border-border px-3 py-2 text-left">성명</th>
                    <th className="border border-border px-3 py-2 text-left">연락처</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border px-3 py-2">총괄 개인정보보호책임자</td><td className="border border-border px-3 py-2">기술이사</td><td className="border border-border px-3 py-2">박진우</td><td className="border border-border px-3 py-2 break-all">privacy@igaworks.com</td></tr>
                  <tr><td className="border border-border px-3 py-2">총괄 개인정보보호담당자</td><td className="border border-border px-3 py-2">보안팀</td><td className="border border-border px-3 py-2">예석환</td><td className="border border-border px-3 py-2"></td></tr>
                  <tr><td className="border border-border px-3 py-2">분야별 담당자 (MI & DMP)</td><td className="border border-border px-3 py-2">MI & DMP</td><td className="border border-border px-3 py-2">성석주</td><td className="border border-border px-3 py-2"></td></tr>
                  <tr><td className="border border-border px-3 py-2">분야별 담당자 (디파이너리 & 애드브릭스)</td><td className="border border-border px-3 py-2">디파이너리 & 애드브릭스</td><td className="border border-border px-3 py-2">김일기</td><td className="border border-border px-3 py-2"></td></tr>
                  <tr><td className="border border-border px-3 py-2">분야별 담당자 (FIXFOLIO)</td><td className="border border-border px-3 py-2">FIXFOLIO</td><td className="border border-border px-3 py-2">현동규</td><td className="border border-border px-3 py-2"></td></tr>
                </tbody>
              </table>
            </div>

            {/* 제12조 */}
            <h2 className="text-heading3 mt-12 mb-4">제12조 (정보주체의 권리행사 문의 및 처리 절차 안내)</h2>
            <p className="text-body2 mb-3">
              정보주체는 아이지에이웍스에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              권리 행사는 아래의 E-Mail을 통해 하실 수 있습니다.
            </p>
            <p className="text-body2 font-medium mb-3">📧 contact@igaworks.com</p>

            {/* 제13조 */}
            <h2 className="text-heading3 mt-12 mb-4">제13조 (권익침해 구제방법)</h2>
            <p className="text-body2 mb-3">정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-body2">
              <li>개인정보 침해신고센터 (한국인터넷진흥원 운영) — 전화: (국번없이) 118 / 홈페이지: privacy.kisa.or.kr</li>
              <li>개인정보 분쟁조정위원회 — 전화: 1833-6972 / 홈페이지: www.kopico.go.kr</li>
              <li>대검찰청 사이버범죄수사단 — 전화: (국번없이) 1301 / www.spo.go.kr</li>
              <li>경찰청 사이버범죄 신고시스템 — 전화: (국번없이) 182 / ecrm.police.go.kr</li>
            </ul>

            {/* 제14조 */}
            <h2 className="text-heading3 mt-12 mb-4">제14조 (고지의 의무)</h2>
            <p className="text-body2">
              아이지에이웍스는 정부의 정책 또는 보안 기술의 변경에 따라 본 개인정보 처리방침의 내용에 추가·삭제 및 수정이 있을 경우
              개정 7일 전부터 아이지에이웍스의 웹사이트, 앱 등의 온라인 수단을 이용하여 해당 내용을 고지합니다.
            </p>

            {/* 제15조 */}
            <h2 className="text-heading3 mt-12 mb-4">제15조 (개인정보 처리방침 변경)</h2>
            <p className="text-body2">이 개인정보 처리방침은 2026년 2월 18일부터 적용됩니다.</p>

            {/* 부칙 */}
            <h2 className="text-heading3 mt-12 mb-4">부칙</h2>
            <p className="text-body2 mb-2">이전 개인정보 처리방침:</p>
            <ul className="list-disc pl-5 space-y-1 text-body2 text-muted-foreground">
              <li>시행일자: 2025.11.20 ~ 2026.02.17</li>
              <li>시행일자: 2025.05.21 ~ 2025.11.19</li>
              <li>시행일자: 2024.11.15 ~ 2025.05.20</li>
              <li>시행일자: 2023.09.01 ~ 2024.11.14</li>
              <li>시행일자: 2023.04.16 ~ 2023.08.31</li>
              <li>시행일자: 2022.01.17 ~ 2023.04.16</li>
              <li>시행일자: 2021.08.01 ~ 2022.01.16</li>
              <li>시행일자: 2020.07.17 ~ 2021.07.30</li>
              <li>시행일자: 2017.11.01 ~ 2020.07.16</li>
              <li>시행일자: 2017.07.15 ~ 2017.10.31</li>
              <li>시행일자: 2016.05.20 ~ 2017.07.14</li>
            </ul>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
