import { motion } from "framer-motion";

const brandNames = [
  "Samsung", "LG", "Hyundai", "SK", "Kakao", "Naver", "CJ", "Lotte",
  "Amorepacific", "Shinsegae", "KB", "Hana", "KT", "BMW", "Nike", "Unilever",
];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-heading2 text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          with 4000+ Global Brands
        </motion.h2>

        <motion.div
          className="bg-accent/50 rounded-xl md:rounded-2xl py-10 md:py-12 px-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brandNames, ...brandNames].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="mx-6 md:mx-10 text-[15px] md:text-[17px] font-medium text-muted-foreground/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-caption text-center mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          아이지에이웍스는 시장을 선도하는 기업들과 함께 합니다.
        </motion.p>
      </div>
    </section>
  );
};

export default BrandsSection;
