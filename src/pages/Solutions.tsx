import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Feature {
  title: string;
  description: string;
}

interface Solution {
  name: string;
  nameKo: string;
  logo?: string;
  tagline: string;
  description: string;
  features: Feature[];
  url: string;
  color: string;
  badges?: string[];
}

interface Category {
  id: string;
  label: string;
  solutions: Solution[];
}

const categories: Category[] = [
  {
    id: "data",
    label: "Data Infrastructure",
    solutions: [
      {
        name: "MOBILEINDEX",
        nameKo: "MobileIndex",
        logo: "https://mobileindex.com/logo.3f3e6a40.svg",
        tagline: "모바일 시장의 흐름을 한눈에",
        description:
          "국내 최대 규모 데이터 기반 모바일 앱·게임 마켓 인텔리전스 및 앱/마켓 신용카드 결제 데이터 분석 솔루션입니다.",
        features: [
          { title: "앱 마켓 인텔리전스", description: "앱 다운로드, MAU, 사용 시간 등 주요 지표를 실시간으로 분석합니다." },
          { title: "결제 데이터 분석", description: "신용카드 결제 데이터를 기반으로 앱 내 매출 트렌드를 파악합니다." },
          { title: "경쟁사 벤치마킹", description: "카테고리별 경쟁사 현황을 비교 분석하여 전략 수립을 지원합니다." },
        ],
        url: "https://www.mobileindex.com",
        color: "hsl(225, 90%, 58%)",
      },
      {
        name: "adbrix",
        nameKo: "adbrix",
        logo: "https://www.adbrix.ai/favicon.ico",
        tagline: "광고 성과를 정밀하게 측정하다",
        description:
          "광고 성과 측정부터 이용자 행동 분석 및 광고 사기 방어 기능까지 갖춘 국내 시장 최적화 모바일 어트리뷰션(MMP)입니다.",
        features: [
          { title: "모바일 어트리뷰션", description: "광고 채널별 성과를 정밀하게 측정하고 ROAS를 최적화합니다." },
          { title: "유저 행동 분석", description: "앱 내 사용자 여정을 추적하여 전환 퍼널을 분석합니다." },
          { title: "프로드 방어", description: "광고 사기를 실시간으로 감지하고 차단하여 광고비를 보호합니다." },
        ],
        url: "https://www.dfinery.io/mmp",
        color: "hsl(260, 80%, 58%)",
      },
      {
        name: "TV INDEX",
        nameKo: "TV INDEX",
        logo: "https://www.tv-index.com/favicon.ico",
        tagline: "TV 시청 데이터의 새로운 기준",
        description:
          "IPTV 3사 1,800만 셋톱박스 데이터 기반의 TV 시청 분석 솔루션입니다.",
        features: [
          { title: "흔들리지 않는 데이터", description: "1,800만 셋톱박스의 실측 데이터로 표본 오차 없이, 누락 없이, 정확한 시청 현황을 제공합니다." },
          { title: "시청률 그 이상의 인사이트", description: "시청률 하나로는 부족합니다. 시청 시간, 시청자 수 등 다양한 지표로 채널과 프로그램의 실질 성과를 입체적으로 분석합니다." },
          { title: "조건을 더할수록 선명해지는 분석", description: "유입·이탈, 중복 시청까지 — 복합적인 조건을 쌓아도 분석은 흔들리지 않습니다. 시청 행태의 흐름을 가장 세밀하게 들여다보세요." },
        ],
        url: "https://www.tv-index.com",
        color: "hsl(200, 80%, 50%)",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Action & Creative",
    solutions: [
      {
        name: "DFINERY",
        nameKo: "DFINERY",
        logo: "https://www.dfinery.io/favicon.ico",
        tagline: "원스톱 AI CRM 솔루션",
        description:
          "AI 기반 고객 데이터 분석과 실시간 퍼포먼스 마케팅 노하우를 결합해, 정밀한 오디언스 타겟팅부터 캠페인 자동화까지 하나의 플랫폼에서 실현하는 '원스톱 AI CRM 솔루션'입니다.",
        features: [
          { title: "고객 데이터 통합 분석", description: "고객의 행동, 선호도, 잠재적 행동까지 정밀하게 분석합니다." },
          { title: "CRM 및 마케팅 자동화", description: "AI 기반 데이터 활용으로 CRM부터 마케팅 실행까지 원스톱으로 제공합니다." },
          { title: "맞춤형 타겟팅 전략", description: "기존 고객과 잠재 고객을 세분화하여 최적의 마케팅 전략을 지원합니다." },
        ],
        url: "https://www.dfinery.io",
        color: "hsl(250, 85%, 60%)",
      },
      {
        name: "Tradingworks",
        nameKo: "Tradingworks",
        logo: "https://tw360.tradingworks.com/favicon.ico",
        tagline: "데이터와 AI가 완성하는 풀스택 광고 플랫폼",
        description:
          "비교불가한 DMP 데이터와 소비자 예측(SCI) 기술을 바탕으로, 인지도 확보부터 확실한 전환까지 마케팅의 전 여정을 견인합니다.",
        features: [
          { title: "트레이딩웍스360", description: "압도적 데이터가 이식된 지능형 프리미엄 통합 마케팅 플랫폼입니다." },
          { title: "트레이딩웍스DSP", description: "초정밀 타겟팅과 프로그래매틱 바잉으로 퍼포먼스의 한계를 돌파하는 광고 솔루션입니다." },
          { title: "트레이딩웍스RMP", description: "데이터가 비즈니스의 수익으로 연결되는 차세대 리테일 미디어 플랫폼입니다." },
        ],
        url: "https://www.tradingworks.com",
        color: "hsl(210, 90%, 55%)",
      },
      {
        name: "FIXTYPE",
        nameKo: "FIXTYPE",
        tagline: "촬영 없이 만드는 프리미엄 영상",
        description: "촬영이 필요 없는 하이엔드 TVCF급 AI 영상 제작 스튜디오입니다.",
        features: [
          { title: "AI 영상 자동 생성", description: "텍스트 입력만으로 고품질 영상 콘텐츠를 자동 생성합니다." },
          { title: "TVCF급 퀄리티", description: "촬영 없이도 방송 품질의 광고 영상을 제작합니다." },
          { title: "빠른 제작 프로세스", description: "기존 대비 제작 시간과 비용을 획기적으로 절감합니다." },
        ],
        url: "https://fix-type.com",
        color: "hsl(340, 80%, 55%)",
      },
      {
        name: "Fixfolio",
        nameKo: "Fixfolio",
        tagline: "데이터가 만드는 광고 크리에이티브",
        description: "광고 성과 데이터를 학습한 AI 기반 광고 소재 자동 제작 솔루션입니다.",
        features: [
          { title: "성과 기반 소재 생성", description: "광고 성과 데이터를 학습하여 최적의 크리에이티브를 생성합니다." },
          { title: "A/B 테스트 자동화", description: "다양한 소재 변형을 자동 생성하고 성과를 비교합니다." },
          { title: "멀티 포맷 지원", description: "배너, 동영상, SNS 등 다양한 광고 포맷을 지원합니다." },
        ],
        url: "https://fixfolio.ai/home/ko",
        color: "hsl(30, 90%, 55%)",
      },
    ],
  },
  {
    id: "media",
    label: "Media & Network",
    solutions: [
      {
        name: "ADPOPCORN Reward",
        nameKo: "ADPOPCORN Reward",
        logo: "https://www.adpopcorn.com/favicon.ico",
        tagline: "사용자 확보부터 수익화까지",
        description:
          "국내 최대 규모의 데이터를 기반으로 비즈니스 성장에 필요한 사용자 확보부터 수익화까지 모두 지원하는 광고 플랫폼입니다.",
        features: [
          { title: "리워드 광고 네트워크", description: "국내 최대 리워드 광고 네트워크를 통해 사용자를 확보합니다." },
          { title: "데이터 기반 최적화", description: "광고 성과 데이터를 활용하여 캠페인을 자동 최적화합니다." },
          { title: "수익화 솔루션", description: "앱 퍼블리셔를 위한 다양한 수익화 모델을 제공합니다." },
        ],
        url: "https://www.adpopcorn.com",
        color: "hsl(15, 90%, 55%)",
      },
      {
        name: "ADPOPCORN SSP",
        nameKo: "ADPOPCORN SSP",
        logo: "https://www.adpopcorn.com/favicon.ico",
        tagline: "퍼블리셔 수익 극대화 플랫폼",
        description: "모바일 앱 및 웹 퍼블리셔 전용 광고 수익화 플랫폼입니다.",
        features: [
          { title: "헤더비딩 지원", description: "다수의 DSP와 실시간 경쟁 입찰을 통해 최고가 낙찰을 지원합니다." },
          { title: "광고 포맷 다양화", description: "배너, 네이티브, 동영상 등 다양한 광고 포맷을 제공합니다." },
          { title: "실시간 리포팅", description: "광고 수익과 성과를 실시간 대시보드로 모니터링합니다." },
        ],
        url: "https://www.adpopcorn.com",
        color: "hsl(180, 70%, 45%)",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


/* ── Visual Flow Header — dots trace each card border then flow to next ── */
const CategoryFlowHeader = () => {
  const cardW = 300;
  const cardH = 96;
  const r = 16;
  const connGap = 12;
  const connW = 56;

  const step = cardW + connW + connGap * 2;
  const cxArr = [connGap, connGap + step, connGap + step * 2];
  const totalW = cxArr[2] + cardW + connGap;

  const svgH = cardH + 56;
  const cy = svgH / 2;
  const cardY = cy - cardH / 2;

  const roundedRect = (x: number, y: number, w: number, h: number, rad: number) =>
    `M ${x + rad} ${y} L ${x + w - rad} ${y} Q ${x + w} ${y} ${x + w} ${y + rad} L ${x + w} ${y + h - rad} Q ${x + w} ${y + h} ${x + w - rad} ${y + h} L ${x + rad} ${y + h} Q ${x} ${y + h} ${x} ${y + h - rad} L ${x} ${y + rad} Q ${x} ${y} ${x + rad} ${y} Z`;

  const cardLoop = (x: number, y: number) =>
    [
      `M ${x + cardW} ${cy}`,
      `L ${x + cardW} ${y + cardH - r}`,
      `Q ${x + cardW} ${y + cardH} ${x + cardW - r} ${y + cardH}`,
      `L ${x + r} ${y + cardH}`,
      `Q ${x} ${y + cardH} ${x} ${y + cardH - r}`,
      `L ${x} ${y + r}`,
      `Q ${x} ${y} ${x + r} ${y}`,
      `L ${x + cardW - r} ${y}`,
      `Q ${x + cardW} ${y} ${x + cardW} ${y + r}`,
      `L ${x + cardW} ${cy}`,
    ].join(" ");

  const connector = (fromX: number, toX: number) =>
    `M ${fromX} ${cy} L ${toX} ${cy}`;

  const segments = [
    { path: cardLoop(cxArr[0], cardY), dur: 4, delay: 0 },
    { path: connector(cxArr[0] + cardW, cxArr[1]), dur: 1.2, delay: 4 },
    { path: cardLoop(cxArr[1], cardY), dur: 4, delay: 5.2 },
    { path: connector(cxArr[1] + cardW, cxArr[2]), dur: 1.2, delay: 9.2 },
    { path: cardLoop(cxArr[2], cardY), dur: 4, delay: 10.4 },
  ];

  return (
    <motion.div
      className="relative pt-8 md:pt-12 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className="relative mx-auto"
        style={{ width: totalW, maxWidth: "100%", aspectRatio: `${totalW} / ${svgH}` }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${totalW} ${svgH}`}
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <defs>
            <linearGradient id="flowG" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(225, 90%, 58%)" />
              <stop offset="50%" stopColor="hsl(250, 85%, 60%)" />
              <stop offset="100%" stopColor="hsl(15, 90%, 55%)" />
            </linearGradient>
            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Card backgrounds — dark/grey theme */}
          {cxArr.map((x, i) => (
            <rect
              key={`fill${i}`}
              x={x}
              y={cardY}
              width={cardW}
              height={cardH}
              rx={r}
              fill="#ffffff"
            />
          ))}

          {/* Static dashed card borders */}
          {cxArr.map((x, i) => (
            <path
              key={`b${i}`}
              d={roundedRect(x, cardY, cardW, cardH, r)}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
            />
          ))}

          {/* Static dashed connectors */}
          <line x1={cxArr[0] + cardW + 4} y1={cy} x2={cxArr[1] - 4} y2={cy} stroke="hsl(var(--border))" strokeWidth="2.5" strokeDasharray="10 8" />
          <line x1={cxArr[1] + cardW + 4} y1={cy} x2={cxArr[2] - 4} y2={cy} stroke="hsl(var(--border))" strokeWidth="2.5" strokeDasharray="10 8" />

          {/* Arrow tips on connectors */}
          {[0, 1].map((i) => {
            const tipX = cxArr[i + 1] - 4;
            return (
              <polygon
                key={`arrow${i}`}
                points={`${tipX - 6},${cy - 4} ${tipX},${cy} ${tipX - 6},${cy + 4}`}
                fill="hsl(var(--border))"
              />
            );
          })}

          {/* Animated dots */}
          {segments.map((seg, i) => (
            <g key={`t${i}`}>
              <circle r="5" fill="#000000" filter="url(#dotGlow)" opacity="0">
                <animateMotion path={seg.path} dur={`${seg.dur}s`} begin={`${seg.delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.85;1" dur={`${seg.dur}s`} begin={`${seg.delay}s`} repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#000000" opacity="0">
                <animateMotion path={seg.path} dur={`${seg.dur}s`} begin={`${seg.delay + 0.07}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
                <animate attributeName="opacity" values="0;0.45;0.45;0" keyTimes="0;0.08;0.82;1" dur={`${seg.dur}s`} begin={`${seg.delay + 0.07}s`} repeatCount="indefinite" />
              </circle>
              <circle r="1.5" fill="#000000" opacity="0">
                <animateMotion path={seg.path} dur={`${seg.dur}s`} begin={`${seg.delay + 0.14}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
                <animate attributeName="opacity" values="0;0.25;0.25;0" keyTimes="0;0.1;0.8;1" dur={`${seg.dur}s`} begin={`${seg.delay + 0.14}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {/* Card text labels inside SVG — centered, no icons */}
          {categories.map((cat, i) => (
            <a key={cat.id} href={`#cat-${cat.id}`} className="cursor-pointer">
              <text
                x={cxArr[i] + cardW / 2}
                y={cy - 6}
                fontSize="17"
                fontWeight="700"
                fill="hsl(var(--foreground))"
                textAnchor="middle"
              >
                {cat.label}
              </text>
              <text
                x={cxArr[i] + cardW / 2}
                y={cy + 16}
                fontSize="13"
                fill="hsl(var(--muted-foreground))"
                textAnchor="middle"
              >
                {cat.solutions.length} solutions
              </text>
            </a>
          ))}
        </svg>
      </div>
    </motion.div>
  );
};

/* ── Category Section Header — no icon, clean divider ── */
const CategoryHeader = ({ cat }: { cat: Category; index: number }) => (
  <div className="flex items-center gap-4 mb-8">
    <h2 className="text-heading3">{cat.label}</h2>
    <span className="text-[13px] font-medium px-3 py-1 rounded-lg bg-muted text-muted-foreground">
      {cat.solutions.length} solutions
    </span>
    <div className="flex-1 h-px bg-border ml-2" />
  </div>
);

/* ── Solution Card (wide / horizontal) ── */
const SolutionCard = ({ solution }: { solution: Solution }) => (
  <div className="bg-accent/40 rounded-xl md:rounded-2xl p-5 md:p-10 flex flex-col hover:-translate-y-0.5 transition-transform duration-300">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {solution.logo ? (
          <img src={solution.logo} alt={solution.name} className="w-10 h-10 rounded-xl object-contain" />
        ) : (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-[14px]"
            style={{ backgroundColor: solution.color }}
          >
            {solution.name.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[18px] md:text-[20px] font-bold text-heading leading-tight">
              {solution.name}
            </span>
            {solution.badges?.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary/10 text-[11px] md:text-[12px] font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <a
        href={solution.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-border bg-background text-[14px] font-medium text-heading hover:bg-muted transition-colors shrink-0"
      >
        바로가기
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>

    {/* Tagline + Description */}
    <h3 className="text-[20px] md:text-[24px] font-bold text-heading mb-3 leading-snug">
      {solution.tagline}
    </h3>
    <p className="text-body2 leading-relaxed mb-7">
      {solution.description}
    </p>

    {/* Feature cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {solution.features.map((feature) => (
        <div key={feature.title} className="bg-background rounded-xl p-4 md:p-6">
          <h4 className="text-[15px] md:text-[16px] font-bold text-heading mb-2">
            {feature.title}
          </h4>
          <p className="text-[14px] md:text-[15px] text-body2 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h1
            className="text-heading1 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Solutions by IGAWorks
          </motion.h1>
          <motion.p
            className="text-body1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            데이터 수집부터 AI 분석, 광고 집행까지 — IGAWorks의 솔루션으로 비즈니스 성장을 가속하세요.
          </motion.p>
        </div>
      </section>

      {/* ===== PC: Flow header + all categories (lg+) ===== */}
      <section className="hidden lg:block pb-24">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Visual flow header */}
          <CategoryFlowHeader />

          {/* Vertical connecting line from flow to content */}
          <div className="flex justify-center mt-4 mb-16">
            <div className="w-px h-20 bg-gradient-to-b from-border to-transparent" />
          </div>

          {/* All categories stacked */}
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              id={`cat-${cat.id}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-20 last:mb-0 scroll-mt-24"
            >
              <CategoryHeader cat={cat} index={catIdx} />

              <div className="space-y-6">
                {cat.solutions.map((solution, i) => (
                  <motion.div
                    key={solution.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <SolutionCard solution={solution} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Mobile: Tab-based view ===== */}
      <section className="lg:hidden">
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(i)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[14px] transition-all duration-200 shrink-0 ${
                    activeCategory === i
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-body2 hover:bg-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="py-12 px-6 space-y-8">
          {categories[activeCategory].solutions.map((solution, i) => (
            <motion.div
              key={solution.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
