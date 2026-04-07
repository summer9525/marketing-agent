import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Platform {
  name: string;
  description: string;
  badges?: { label: string; items: string[] }[];
}

interface Category {
  title: string;
  platforms: Platform[];
}

const categories: Category[] = [
  {
    title: "Data Infrastructure",
    platforms: [
      {
        name: "MOBILEINDEX",
        description: "국내 최대 규모 데이터 기반 모바일 앱, 게임 마켓 인텔리전스 및 앱/마켓 신용카드 결제 데이터 분석 솔루션입니다.",
      },
      {
        name: "adbrix",
        description: "광고 성과 측정부터 이용자 행동 분석 및 광고 사기 방어 기능까지 갖춘 국내 시장 최적화 모바일 어트리뷰션(MMP)입니다.",
      },
      {
        name: "TV INDEX",
        description: "IPTV 3사 1,800만 셋톱박스 데이터 기반의 TV 시청 분석 솔루션입니다.",
      },
    ],
  },
  {
    title: "AI Action & Creative",
    platforms: [
      {
        name: "DFINERY",
        description: "AI 기반 고객 데이터 분석과 실시간 퍼포먼스 마케팅 노하우를 결합해, 정밀한 오디언스 타겟팅부터 캠페인 자동화까지 하나의 플랫폼에서 실현하는 '원스톱 AI CRM 솔루션'입니다.",
      },
      {
        name: "Tradingworks",
        description: "독보적인 Synthetic Consumer Intelligence 데이터와 AI 기술을 결합하여 프리미엄 지면 통합 운영부터 정밀한 타겟팅, 보장형 퍼포먼스까지 마케팅의 모든 여정을 완벽하게 지원하는 '풀스택(Full-stack) 광고 플랫폼'입니다.",
      },
      {
        name: "FIXTYPE",
        description: "촬영이 필요 없는 하이엔드 TVCF급 AI 영상 제작 스튜디오입니다.",
      },
      {
        name: "Fixfolio",
        description: "광고 성과 데이터를 학습한 AI 기반 광고 소재 자동 제작 솔루션입니다.",
      },
    ],
  },
  {
    title: "Media & Network",
    platforms: [
      {
        name: "ADPOPCORN Reward",
        description: "국내 최대 규모의 데이터를 기반으로 비즈니스 성장에 필요한 사용자 확보부터 수익화까지 모두 지원하는 광고 플랫폼입니다.",
      },
      {
        name: "ADPOPCORN SSP",
        description: "모바일 앱 및 웹 퍼블리셔 전용 광고 수익화 플랫폼입니다.",
      },
    ],
  },
];

const SolutionsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-heading2 mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Solutions by IGAWorks
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="hidden lg:block space-y-1">
              {categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 text-[16px] ${
                    activeCategory === i
                      ? "bg-accent text-heading font-bold shadow-card"
                      : "text-body2 hover:bg-accent/50"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-[14px] transition-all duration-200 shrink-0 ${
                    activeCategory === i
                      ? "bg-primary text-primary-foreground font-medium"
                      : "bg-accent text-body2"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9 min-h-[300px] lg:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {categories[activeCategory].platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-9 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="text-[18px] md:text-[20px] font-bold text-primary-foreground mb-3 md:mb-4">
                      {platform.name}
                    </h4>
                    <p className="text-[14px] md:text-[16px] text-primary-foreground/70 leading-relaxed">
                      {platform.description}
                    </p>
                    {platform.badges && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mt-5">
                        {platform.badges.map((group) =>
                          group.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-foreground/10 text-[12px] md:text-[13px] text-primary-foreground/80"
                            >
                              {item}
                            </span>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
