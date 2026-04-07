import { motion } from "framer-motion";

const pipelines = [
  {
    title: "01 Data: The AI Moat",
    body: `데이터 없는 AI는 단순한 데모에 불과합니다.
4,300만 규모의 데이터를 학습한 AI가 방대한 데이터 속에서 고객의 구매 시그널을 포착해
불확실성을 제거하고 미래 행동을 예측하는 고도화된 인텔리전스(Synthetic Consumer Intelligence)를 구현합니다.`,
  },
  {
    title: "02 The AI-Synthetic Audience",
    body: `AI Synthetic Audience 는 아이지에이웍스의 AI 기술로 생성된 가상의 소비자 페르소나로
실제 소비자의 행동, 선호도, 의사결정 과정을 정교하게 시뮬레이션합니다.
이는 기존의 Audience 개념을 뛰어넘어, 마케팅 및 비즈니스 전략에 새로운 표준을 제시하는 혁신적인 데이터 모델입니다.`,
  },
  {
    title: "03 AI Solutions, Built on the Data",
    body: `SCI를 기반으로 고도화된 솔루션은 기업의 가장 강력한 마케팅 파트너가 됩니다.
AI 에이전트 기반 CRM 솔루션, AI Synthetic Audience 기반 매체 광고 집행 그리고 AI 기반 광고 제작까지
아이지에이웍스 솔루션은 마케팅의 전반적인 과정에서 활용 가능합니다.`,
  },
];

const AIPipelineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-body1 font-bold text-heading mb-2 leading-relaxed">
            데이터 중심의 새로운 마케팅 생태계
          </p>
          <h2 className="text-heading2 mb-0">
            아이지에이웍스 AI Synthetic Consumer Intelligence(SCI)
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-20 space-y-0">
          {pipelines.map((item, i) => (
            <motion.div
              key={item.title}
              className="py-8 md:py-12 pl-6 md:pl-8 relative"
              style={{
                boxShadow: i < pipelines.length - 1 ? "0 1px 0 0 rgba(0,0,0,0.06)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="absolute left-0 top-8 md:top-12 bottom-8 md:bottom-12 w-[3px] bg-heading rounded-full"
              />
              <h3 className="text-heading3 mb-4 md:mb-5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-body2 max-w-4xl whitespace-pre-line">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPipelineSection;
