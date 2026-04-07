import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.h2
          className="text-[32px] md:text-[52px] font-bold text-primary-foreground mb-5 md:mb-7 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Target your future consumer
        </motion.h2>
        <motion.p
          className="text-body1 text-primary-foreground/70 mb-10 md:mb-12 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          지금 아이지에이웍스의 데이터와 AI 기술을 통해<br className="md:hidden" /> 미래의 소비자를 선점하세요.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link to="/contact" className="inline-block px-10 md:px-12 py-4 md:py-5 bg-primary-foreground text-primary rounded-xl text-[16px] md:text-[17px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
            문의하기
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
