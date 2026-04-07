import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[62vh] flex items-center justify-center overflow-hidden bg-[hsl(210,30%,96%)]">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, hsl(210,30%,97%) 0%, hsl(215,25%,93%) 40%, hsl(210,30%,96%) 70%, hsl(220,20%,95%) 100%)"
      }} />

      {/* Floating spheres */}
      <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full top-[-40px] right-[-40px] md:top-[-60px] md:right-[-60px] animate-float-slow"
        style={{ background: "radial-gradient(circle at 35% 35%, hsl(210,20%,98%), hsl(215,25%,90%))", boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.03)" }} />
      <div className="absolute w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full top-[15%] left-[8%] animate-float-mid"
        style={{ background: "radial-gradient(circle at 35% 35%, hsl(210,15%,99%), hsl(215,20%,92%))", boxShadow: "inset -6px -6px 16px rgba(0,0,0,0.03), 0 6px 24px rgba(0,0,0,0.02)" }} />
      <div className="absolute w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full top-[30%] right-[20%] animate-float-fast"
        style={{ background: "radial-gradient(circle at 35% 35%, hsl(210,15%,99%), hsl(215,20%,93%))", boxShadow: "inset -4px -4px 10px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.02)" }} />
      <div className="absolute w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bottom-[35%] left-[25%] animate-float-mid"
        style={{ background: "radial-gradient(circle at 35% 35%, hsl(210,15%,99%), hsl(215,20%,93%))", boxShadow: "inset -3px -3px 8px rgba(0,0,0,0.03), 0 3px 12px rgba(0,0,0,0.02)" }} />
      <div className="absolute w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded-full top-[20%] left-[55%] animate-float-fast"
        style={{ background: "radial-gradient(circle at 35% 35%, hsl(210,15%,99%), hsl(215,20%,93%))", boxShadow: "inset -2px -2px 6px rgba(0,0,0,0.03)" }} />

      {/* Wave shapes at bottom */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="none" style={{ height: "55%" }}>
        {/* Wave 1 - deepest, slowest, big amplitude */}
        <path fill="hsl(215,22%,91%)" opacity="0.3">
          <animate attributeName="d" dur="7s" repeatCount="indefinite" values="
            M0,160 C180,280 360,80 540,200 C720,320 900,100 1080,220 C1260,300 1380,140 1440,200 L1440,400 L0,400 Z;
            M0,220 C180,100 360,300 540,160 C720,60 900,280 1080,160 C1260,100 1380,260 1440,180 L1440,400 L0,400 Z;
            M0,160 C180,280 360,80 540,200 C720,320 900,100 1080,220 C1260,300 1380,140 1440,200 L1440,400 L0,400 Z
          " />
        </path>
        {/* Wave 2 */}
        <path fill="hsl(210,25%,93%)" opacity="0.45">
          <animate attributeName="d" dur="9s" repeatCount="indefinite" values="
            M0,220 C240,140 480,310 720,200 C960,110 1200,290 1440,220 L1440,400 L0,400 Z;
            M0,200 C240,300 480,140 720,240 C960,320 1200,160 1440,240 L1440,400 L0,400 Z;
            M0,220 C240,140 480,310 720,200 C960,110 1200,290 1440,220 L1440,400 L0,400 Z
          " />
        </path>
        {/* Wave 3 - prominent ribbon */}
        <path fill="hsl(210,20%,95%)" opacity="0.6">
          <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
            M0,270 C200,220 400,320 600,260 C800,210 1000,300 1200,250 C1340,230 1420,270 1440,260 L1440,400 L0,400 Z;
            M0,250 C200,310 400,220 600,280 C800,330 1000,230 1200,280 C1340,300 1420,250 1440,270 L1440,400 L0,400 Z;
            M0,270 C200,220 400,320 600,260 C800,210 1000,300 1200,250 C1340,230 1420,270 1440,260 L1440,400 L0,400 Z
          " />
        </path>
        {/* Wave 4 - front */}
        <path fill="hsl(210,18%,96.5%)" opacity="0.8">
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
            M0,320 C360,280 720,350 1080,310 C1260,295 1380,330 1440,320 L1440,400 L0,400 Z;
            M0,310 C360,345 720,295 1080,335 C1260,348 1380,305 1440,325 L1440,400 L0,400 Z;
            M0,320 C360,280 720,350 1080,310 C1260,295 1380,330 1440,320 L1440,400 L0,400 Z
          " />
        </path>
        {/* Wave 5 - frontmost white */}
        <path fill="hsl(0,0%,100%)" opacity="0.5">
          <animate attributeName="d" dur="11s" repeatCount="indefinite" values="
            M0,355 C240,340 480,370 720,350 C960,335 1200,365 1440,355 L1440,400 L0,400 Z;
            M0,348 C240,368 480,342 720,358 C960,372 1200,345 1440,360 L1440,400 L0,400 Z;
            M0,355 C240,340 480,370 720,350 C960,335 1200,365 1440,355 L1440,400 L0,400 Z
          " />
        </path>
      </svg>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-screen-xl mx-auto px-6 py-[12vh] md:py-[15vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-[48px] md:text-[88px] font-black text-heading tracking-[-0.03em] leading-[1.1] mb-5 md:mb-8" variants={item}>
          Built on Data.<br />Driven by AI.
        </motion.h1>
        <motion.p className="text-body1 max-w-2xl mx-auto" variants={item}>
          AI가 창조한 완벽한 디지털 페르소나,<br className="md:hidden" /> 마케팅의 다음 단계를 엽니다.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
