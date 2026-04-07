import { Link } from "react-router-dom";

const footerLinks = {
  "서비스": [
    { label: "공식 블로그", href: "https://www.igaworksblog.com/" },
    { label: "개인정보 처리 방침", href: "/privacy", isRoute: true },
    { label: "저작권 정책", href: "/copyright", isRoute: true },
  ],
  "솔루션": [
    { label: "애드브릭스", href: "https://www.dfinery.io/mmp" },
    { label: "디파이너리", href: "https://www.dfinery.io/crm" },
    { label: "모바일인덱스", href: "https://www.mobileindex.com/" },
    { label: "트레이딩웍스", href: "https://www.tradingworks.com/" },
    { label: "애드팝콘", href: "https://www.adpopcorn.com/" },
    { label: "TV INDEX", href: "https://www.tv-index.com/" },
    { label: "픽스타입", href: "https://fix-type.com/" },
    { label: "픽스폴리오", href: "https://fixfolio.ai/home/ko" },
  ],
  "소셜 미디어": [
    { label: "페이스북", href: "https://www.facebook.com/IGAWorks.group/" },
    { label: "링크드인", href: "https://www.linkedin.com/company/igaworks" },
  ],
  "채용": [
    { label: "진행 중인 공고", href: "https://igaworks.career.greetinghr.com/home" },
  ],
  "문의": [
    { label: "솔루션 문의", href: "/contact", isRoute: true },
  ],
};

const Footer = () => {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "#F4F4F6" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-caption font-medium text-heading mb-3 md:mb-4">{category}</h4>
              <ul className="space-y-2 md:space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link to={link.href} className="text-caption text-body2 hover:text-heading transition-colors duration-200">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-caption text-body2 hover:text-heading transition-colors duration-200">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company info */}
        <div className="pt-6 md:pt-8 space-y-1.5 border-t border-border/50">
          <p className="text-caption text-muted-foreground font-medium">(주)아이지에이웍스</p>
          <p className="text-caption text-muted-foreground">사업자 등록 번호 : 220-8741741</p>
          <p className="text-caption text-muted-foreground">대표 : 마국성</p>
          <p className="text-caption text-muted-foreground">주소 : 서울특별시 용산구 서빙고로 17 26층 (한강로 3가, 센트럴파크타워)</p>
          <p className="text-caption text-muted-foreground mt-4">© 2026. IGAWorks Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
