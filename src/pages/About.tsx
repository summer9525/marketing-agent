import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutVisionBg from "@/assets/about-vision-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const features = [
  {
    title: "대한민국 업계 리더 기업들이 선택한\n표준 플랫폼",
    description:
      "데이터 역량이 곧 기업의 미래입니다. 네이버, 삼성, LG, 롯데, 신세계를 비롯한 대기업과 제일기획, 대홍기획 등 대형 광고회사에 이르기까지 28,000여 개의 서비스가 아이지에이웍스를 선택했습니다. 고객의 성향을 정교하게 분석하고, 광고와 마케팅 전반의 의사결정부터 실행, 운영까지 매출과 비즈니스의 직접적인 성장을 이끌어냅니다.",
  },
  {
    title: "국내 유일 종합 데이터 테크 SaaS 기업",
    description:
      "단순한 데이터 제공을 넘어, 차세대 핵심 기술이 융합된 데이터 테크 혁신을 주도합니다. 국내 유일의 '데이터-플랫폼-에이전시' 로 이어지는 데이터 드리븐 비즈니스의 밸류체인을 견고하게 완성했습니다.",
  },
  {
    title: "AI와 머신러닝으로 고도화된\n데이터 인텔리전스",
    description:
      "모바일 데이터의 다양한 지표와 흐름을 한눈에 확인하고, 이를 즉각적으로 비즈니스에 적용할 수 있는 고도의 분석 기술을 제공합니다. 금융, 의료, 커머스, 게임, 핀테크, O2O 등 전 산업 분야에 걸쳐 광범위한 데이터를 바탕으로 최적의 인사이트를 도출합니다.",
  },
];

const stats = [
  { value: "28,000+", label: "국내외 솔루션 이용 모바일\n앱 및 파트너 기업" },
  { value: "10억+", label: "분석 중인 누적 모바일\n데이터 디바이스 수" },
  { value: "75%", label: "이커머스 상위 100개\n기업의 솔루션 점유율" },
  { value: "10조 원", label: "분석된 모바일 구매 데이터\n규모" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h1
            className="text-heading1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Data와 AI로
            <br />
            비즈니스 혁신을 만들어냅니다
          </motion.h1>
          <motion.p
            className="text-body1 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            아이지에이웍스는 B2B 모바일 데이터 사업을 대표하는
            <br className="hidden md:block" />
            국내 유일의 종합 데이터 테크 SaaS 기업입니다.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 space-y-12 md:space-y-0">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16 py-10 md:py-14 border-t border-border"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-[18px] md:text-[20px] font-bold text-heading leading-snug whitespace-pre-line">
                {feat.title}
              </h3>
              <p className="text-body2 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-[28px] md:text-[40px] font-bold text-heading tracking-tight mb-2 md:mb-3">
                  {stat.value}
                </div>
                <p className="text-caption whitespace-pre-line">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutVisionBg})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <motion.h2
            className="text-[24px] md:text-[36px] font-bold text-primary-foreground leading-snug mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            대한민국을 대표하는 빅데이터 리딩 기업,
            <br />
            지속 가능한 성장을 향해 나아갑니다.
          </motion.h2>
          <motion.div
            className="max-w-2xl space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-body2 text-primary-foreground/80 leading-relaxed">
              압도적인 기술력과 폭발적인 사업성을 인정받은 아이지에이웍스는 국내 유수의 대형 투자사로부터 누적 투자를 유치하고, 최근 Pre-IPO 단계인 시리즈 E 투자를 성공적으로 단행했습니다. 앞으로도 독보적인 기술력과 인사이트를 시장과 공유하며, 모바일 빅데이터와 마케팅 분야의 시너지를 창출하고 파트너들의 성공적인 성장을 돕는 가장 강력한 동반자가 되겠습니다.
            </p>
            <p className="text-body2 text-primary-foreground/90 font-medium">
              Data-driven Growth. AI-powered Future.
              <br />
              아이지에이웍스와 함께 다음 성공 사례의 주인공이 되어보세요.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.h2
            className="text-[28px] md:text-[44px] font-bold text-heading leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            데이터 역량이 결정짓는 기업의 미래,
            <br />
            아이지에이웍스가 든든한 파트너가 되겠습니다.
          </motion.h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
