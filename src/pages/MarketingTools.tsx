import { ExternalLink, Monitor, Globe, FileText, BarChart3, Link2, Search, Mail, Tv, Wrench } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  type: "local" | "external" | "html";
  badge?: string;
}

interface ToolCategory {
  title: string;
  emoji: string;
  tools: Tool[];
}

const BASE = import.meta.env.BASE_URL;

const categories: ToolCategory[] = [
  {
    title: "콘텐츠 제작",
    emoji: "✍️",
    tools: [
      {
        name: "뉴스레터 / SNS 콘텐츠 작성",
        description: "뉴스레터·SNS 채널별 맞춤 콘텐츠 작성",
        icon: <Mail className="w-5 h-5" />,
        href: "https://rosiejoo.github.io/letter-lab/",
        type: "external",
      },
    ],
  },
  {
    title: "데이터 & 리포트",
    emoji: "📊",
    tools: [
      {
        name: "데이터 차트 자동 생성",
        description: "데이터를 입력하면 차트를 자동으로 생성",
        icon: <BarChart3 className="w-5 h-5" />,
        href: "https://bae-daisy.github.io/daisy-s-chart-studio/",
        type: "external",
      },
      {
        name: "TOP 50 리포트 자동화",
        description: "TOP 50 리포트를 자동으로 생성",
        icon: <FileText className="w-5 h-5" />,
        href: "https://top50-report.onrender.com",
        type: "external",
      },
      {
        name: "TV INDEX 랭킹 자동화",
        description: "TV INDEX 랭킹 데이터를 자동으로 생성",
        icon: <Tv className="w-5 h-5" />,
        href: "#",
        type: "local",
        badge: "준비중",
      },
    ],
  },
  {
    title: "PR & 분석",
    emoji: "🔍",
    tools: [
      {
        name: "PR 전달용 모바일인덱스 추출",
        description: "모바일인덱스 데이터를 PR용으로 추출·정리",
        icon: <Monitor className="w-5 h-5" />,
        href: "https://mi-data-tool.onrender.com/",
        type: "external",
      },
      {
        name: "경쟁사 블로그 분석",
        description: "경쟁사 블로그 콘텐츠 갭 분석 리포트",
        icon: <Search className="w-5 h-5" />,
        href: `${BASE}blog-content-gap-analysis.html`,
        type: "html",
      },
    ],
  },
  {
    title: "유틸리티",
    emoji: "🛠️",
    tools: [
      {
        name: "URL 축약 도구",
        description: "긴 URL을 짧게 줄여서 공유",
        icon: <Link2 className="w-5 h-5" />,
        href: `${BASE}url-shortener.html`,
        type: "html",
      },
      {
        name: "딥링크 가이드",
        description: "딥링크 설정 가이드 및 테스트",
        icon: <Globe className="w-5 h-5" />,
        href: `${BASE}blog-deeplink-guide.html`,
        type: "html",
      },
      {
        name: "딥링크 가이드 (지역별)",
        description: "지역별 딥링크 설정 가이드",
        icon: <Globe className="w-5 h-5" />,
        href: `${BASE}blog-deeplink-guide-geo.html`,
        type: "html",
      },
    ],
  },
];

const badgeStyles: Record<string, string> = {
  "준비중": "bg-amber-50 text-amber-700 border-amber-200",
};

const typeIcon = (type: Tool["type"]) => {
  switch (type) {
    case "local": return <Monitor className="w-3.5 h-3.5" />;
    case "html": return <FileText className="w-3.5 h-3.5" />;
    case "external": return <ExternalLink className="w-3.5 h-3.5" />;
  }
};

const MarketingTools = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Wrench className="w-6 h-6 text-gray-400" />
            <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">Marketing Toolkit</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            마케팅팀 도구 모음
          </h1>
          <p className="text-gray-500 text-sm">
            마케팅팀에서 사용하는 도구들을 한 곳에서 확인하고 바로 실행할 수 있습니다.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8 pb-20">
        {categories.map((category) => (
          <section key={category.title} className="mb-10">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>{category.emoji}</span>
              {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.tools.map((tool) => {
                const isDisabled = tool.href === "#";
                const isNewTab = tool.type === "html" || tool.type === "external";
                const Tag = isDisabled ? "div" : "a";
                const linkProps = isDisabled
                  ? {}
                  : isNewTab
                    ? { href: tool.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: tool.href };

                return (
                  <Tag
                    key={tool.name}
                    {...linkProps}
                    className={`group block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-200 ${
                      isDisabled
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 cursor-pointer"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors">
                        {tool.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {tool.badge && (
                          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${badgeStyles[tool.badge] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
                            {tool.badge}
                          </span>
                        )}
                        <span className="text-gray-300 group-hover:text-gray-500 transition-colors">
                          {typeIcon(tool.type)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-1">{tool.name}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{tool.description}</p>
                  </Tag>
                );
              })}
            </div>
          </section>
        ))}

        {/* Legend */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-6 text-[12px] text-gray-400">
            <span className="flex items-center gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> 외부 서비스</span>
            <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> HTML 페이지</span>
            <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5" /> 준비중</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketingTools;
