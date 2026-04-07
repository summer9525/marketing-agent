import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Notice {
  id: string;
  title: string;
  content: React.ReactNode;
}

const notices: Notice[] = [
  {
    id: "split-objection",
    title: "회사 분할에 따른 채권자 이의 제출 및 주권 제출 공고",
    content: (
      <>
        <p className="text-body2 leading-relaxed mb-4">
          주식회사 아이지에이웍스는 2026년 3월 30일 정기주주총회에서 상법 제530조의3 규정에 의한 회사분할을 결의함에 따라, 관련 법령에 근거하여 아래의 사항을 공고합니다.
        </p>
        <h4 className="font-bold text-heading text-[14px] mb-2">1. 회사 분할 관련 사항</h4>
        <ul className="text-body2 leading-relaxed mb-4 space-y-1 pl-4">
          <li>가. 대상주권 : 주식회사 아이지에이웍스 보통주</li>
          <li>나. 분할방식 : 분할대상 사업부문(광고 실행 서비스 사업부문)에 대한 단순·인적분할</li>
          <li>다. 분할기일 : 2026년 5월 1일 (예정)</li>
          <li>라. 배정대상 : 분할회사의 분할주주 배정기준(2026.04.30) 현재 주주명부에 등재되어 있는 주주</li>
          <li>마. 신주 배정 방식 및 단주처리 : 분할회사 보통주식 1주당 신설회사 보통주식 1주를 배정하며, 신주 배정과 관련하여 단주가 발생하지 아니함.</li>
        </ul>
        <h4 className="font-bold text-heading text-[14px] mb-2">2. 주권 제출에 관한 사항</h4>
        <p className="text-body2 leading-relaxed mb-4">
          당사는 주식·사채 등의 전자등록에 관한 법률에 따른 전자증권 제도 적용 회사입니다. 이에 따라 전자등록된 주식에 대해서는 주권 제출 절차 없이 관련 법규에 따라 권리 변동이 처리되므로, 주권 제출을 하지 않더라도 주주에 관한 주주의 별도 조치가 필요 없습니다.
        </p>
        <h4 className="font-bold text-heading text-[14px] mb-2">3. 채권자 이의 제출에 관한 사항</h4>
        <p className="text-body2 leading-relaxed mb-4">
          상법 제530조의9 규정 및 분할계획서에 의거하여, 분할신설회사는 당사의 채무 중에서 분할대상 사업부문과 관련하여 분할계획서상 승계하기로 정한 채무만을 부담하고, 당사의 채무 중 분할신설회사로 승계되지 아니하는 채무에 대해서는 연대하여 변제할 책임을 부담하지 아니합니다. 당사는 분할신설회사로 승계되는 채무에 대해서는 연대하여 변제할 책임을 부담하지 아니하고 분할신설회사로 승계되지 아니하는 채무에 대한 책임만을 부담합니다.
        </p>
        <p className="text-body2 leading-relaxed mb-4">
          본 분할에 이의가 있으신 채권자는 이의제출기간 내에 당사에 이의를 서면으로 제출하여 주시기 바랍니다.
        </p>
        <ul className="text-body2 leading-relaxed mb-4 space-y-1 pl-4">
          <li>• 채권자 이의제출기간 : 2026년 3월 30일(월) ~ 2026년 4월 30일(목)</li>
          <li>• 채권자 이의제출처 :</li>
          <li className="pl-4">- 일반우편 : 서울특별시 용산구 서빙고로 17, 센트럴파크타워 26층<br />㈜아이지에이웍스 채권자 이의제출 담당자 (우 : 04387)</li>
          <li className="pl-4">- 전자우편 : legal@igaworks.com</li>
        </ul>
        <h4 className="font-bold text-heading text-[14px] mb-2">4. 참고사항</h4>
        <p className="text-body2 leading-relaxed mb-6">
          ※ 본 일정은 관계기관과의 협의, 회사 내부 사정 등에 따라 일부 변경될 수 있습니다.
        </p>
        <p className="text-body2 text-center leading-relaxed">
          2026년 3월 30일<br />
          주식회사 아이지에이웍스<br />
          서울시 용산구 서빙고로 17, 24층, 26층<br />
          대표이사 마국성
        </p>
      </>
    ),
  },
  {
    id: "privacy-transfer",
    title: "분할에 따른 개인정보 이전 통지",
    content: (
      <>
        <p className="text-body2 leading-relaxed mb-4">
          주식회사 아이지에이웍스(이하 "당사")는 2026년 3월 30일 개최한 주주총회에서 당사의 광고 실행 서비스 사업 부문(이하 "분할대상 사업부문")을 단순·인적분할의 방법으로 분할하여 주식회사 트레이딩웍스(가칭)(이하 "분할신설회사")를 설립하는 내용의 분할계획서를 승인 결의하였습니다.
        </p>
        <p className="text-body2 leading-relaxed mb-4">
          본 건 분할로 인하여 분할대상 사업부문과 관련하여 보유하고 있던 고객 및 거래상대방의 개인정보, 소속 임직원 등 일체의 개인정보는 2026년 5월 1일자로 분할신설회사에 이전될 예정입니다.
        </p>
        <p className="text-body2 leading-relaxed mb-2">개인정보를 이전 받는 분할신설회사의 세부사항은 다음과 같습니다.</p>
        <ul className="text-body2 leading-relaxed mb-4 space-y-1 pl-4">
          <li>• 법인명 : 주식회사 트레이딩웍스(가칭)</li>
          <li>• 주소 : 서울시 용산구 서빙고로 17, 센트럴파크타워 24층</li>
          <li>• 대표이사 : 손광일</li>
          <li>• 연락처 : 향후 홈페이지 공지를 통해 안내 예정</li>
        </ul>
        <p className="text-body2 leading-relaxed mb-4">
          본건 분할 후에도 개인정보는 기존과 동일한 목적의 범위 내에서만 이용되며, '개인정보 보호법' 등 관련 법령을 준수합니다.
        </p>
        <p className="text-body2 leading-relaxed mb-4">
          개인정보 이전에 관한 이의 또는 기타 문의사항이 있으신 분은 아래의 담당부서로 연락하여 주시기 바라며, 본 분할에 따른 개인정보 이전을 원하지 않는 경우 본 공지에서는 2026년 4월 30일까지 아래의 담당부서로 개인정보이전 거부에 관한 의사를 통보하여 주시기 바랍니다.
        </p>
        <ul className="text-body2 leading-relaxed mb-6 space-y-1 pl-4">
          <li>• 담당 부서 : ㈜아이지에이웍스 보안팀</li>
          <li>• 이메일 : privacy@igaworks.com</li>
        </ul>
        <p className="text-body2 text-center leading-relaxed">
          2026년 3월 30일<br />
          주식회사 아이지에이웍스<br />
          대표이사 마국성
        </p>
      </>
    ),
  },
];

const STORAGE_KEY = "popup_dismissed_";

const AnnouncementPopup = () => {
  const [visible, setVisible] = useState<boolean[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const today = new Date().toDateString();
    const vis = notices.map((n) => localStorage.getItem(STORAGE_KEY + n.id) !== today);
    setVisible(vis);
  }, []);

  const handleClose = (idx: number) => {
    setVisible((prev) => prev.map((v, i) => (i === idx ? false : v)));
  };

  const handleDismissToday = (idx: number) => {
    localStorage.setItem(STORAGE_KEY + notices[idx].id, new Date().toDateString());
    handleClose(idx);
  };

  const anyVisible = visible.some(Boolean);
  if (!anyVisible) return null;

  // Mobile: show one at a time (first visible)
  const mobileActiveIdx = isMobile ? visible.findIndex(Boolean) : -1;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {isMobile ? (
        mobileActiveIdx >= 0 && (
          <div className="bg-background rounded-2xl shadow-card-hover w-full max-w-lg max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
              <h3 className="text-[15px] md:text-[17px] font-bold text-heading leading-snug pr-4">
                {notices[mobileActiveIdx].title}
              </h3>
              <button onClick={() => handleClose(mobileActiveIdx)} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition-colors" aria-label="닫기">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {notices[mobileActiveIdx].content}
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <button onClick={() => handleDismissToday(mobileActiveIdx)} className="text-[13px] text-muted-foreground hover:text-heading transition-colors">
                오늘 하루 보지 않기
              </button>
              <button onClick={() => handleClose(mobileActiveIdx)} className="px-5 py-2 bg-primary text-primary-foreground rounded-xl text-[14px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                닫기
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="flex gap-4 max-w-5xl w-full max-h-[85vh]">
          {notices.map((notice, idx) =>
            visible[idx] ? (
              <div key={notice.id} className="bg-background rounded-2xl shadow-card-hover flex-1 min-w-0 max-h-[85vh] flex flex-col">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
                  <h3 className="text-[15px] md:text-[17px] font-bold text-heading leading-snug pr-4">
                    {notice.title}
                  </h3>
                  <button onClick={() => handleClose(idx)} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent transition-colors" aria-label="닫기">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  {notice.content}
                </div>
                <div className="flex items-center justify-between px-6 py-4 border-t border-border">
                  <button onClick={() => handleDismissToday(idx)} className="text-[13px] text-muted-foreground hover:text-heading transition-colors">
                    오늘 하루 보지 않기
                  </button>
                  <button onClick={() => handleClose(idx)} className="px-5 py-2 bg-primary text-primary-foreground rounded-xl text-[14px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                    닫기
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default AnnouncementPopup;
