import { motion } from "framer-motion";

const stats = [
  { value: "43M+", label: "Mobile Devices" },
  { value: "2.5B+", label: "Daily Data Points" },
  { value: "1,500+", label: "AI Personas" },
  { value: "4,000+", label: "Global Brands" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.p
          className="text-[20px] md:text-[26px] font-medium text-heading text-center mb-10 md:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          아이지에이웍스는 AI · 머신러닝 기술을 활용해<br className="md:hidden" /> 데이터에 기반한 마케팅과 비즈니스 혁신을<br className="md:hidden" /> 가능하게 합니다.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-[36px] md:text-[56px] font-bold text-heading tracking-tight mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-caption">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
