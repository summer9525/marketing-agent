import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const SCISection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-heading2 mb-4">
            아이지에이웍스가 개발한 AI SCI는
            <br />
            기존 데이터와 플랫폼의 한계를 넘어
            <br className="md:hidden" />
            새로운 차원의 경쟁력을 제공합니다.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 기존 데이터 카드 */}
          <motion.div
            className="bg-card rounded-xl md:rounded-2xl shadow-card p-6 md:p-12 hover:shadow-card-hover transition-all duration-300 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-heading3 mb-7 md:mb-9">
              기존 데이터
            </h3>
            <ul className="space-y-5 md:space-y-6">
              {[
                "개인정보 보호 정책으로 인한 데이터 수집 제한",
                "제한적인 타겟 오디언스 범위",
                "트래킹 기술의 한계로 정확도 감소",
                "실시간 데이터 업데이트 어려움",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" />
                  </span>
                  <span className="text-body2">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AI Synthetic Audience 카드 */}
          <motion.div
            className="bg-primary rounded-xl md:rounded-2xl p-6 md:p-12 hover:-translate-y-1 transition-all duration-300 order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-[22px] md:text-[28px] font-bold text-primary-foreground mb-7 md:mb-9">
              AI Synthetic Audience
            </h3>
            <ul className="space-y-5 md:space-y-6">
              {[
                "개인정보 제약 없는 AI 합성 데이터 활용",
                "무제한 타겟 오디언스 생성 가능",
                "AI 머신러닝 기반 정확도 극대화",
                "실시간 AI 데이터 분석 및 최적화",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[hsl(145,80%,45%)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                  <span className="text-[15px] md:text-[17px] text-primary-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SCISection;
