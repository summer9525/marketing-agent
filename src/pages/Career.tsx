import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Clock, Gift, Coffee, Heart, Dumbbell, Sofa, Package, Monitor, BookMarked, Cake, Star, Stethoscope, GraduationCap, Users } from "lucide-react";

const wayOfWork = [
  {
    tag: "01",
    title: "Focus on the 'Why'",
    subtitle: "본질 중심",
    description: "우리는 '무엇을 할 것인가'보다 '왜 해야 하는가'를 먼저 정의합니다. 고객 문제의 본질을 기준으로 우선순위를 결정하고, 일이 복잡해질수록 다시 Why로 돌아가서 논의합니다.",
  },
  {
    tag: "02",
    title: "Open by Default",
    subtitle: "투명한 신뢰",
    description: "우리는 명확한 사실과 데이터를 기반으로 투명하게 소통합니다. 좋은 결과뿐 아니라 부족한 부분까지 있는 그대로 공개하며, 신뢰는 설명이 아니라 사실에서 만들어집니다.",
  },
  {
    tag: "03",
    title: "Solve the Real Pain",
    subtitle: "고객 중심 공감",
    description: "우리가 생각하는 정답이 아닌, 고객의 해답을 찾습니다. 고객의 가장 깊은 고민(Pain point)을 먼저 정의하고, 그들의 언어로 실질적인 해결책을 제안합니다.",
  },
  {
    tag: "04",
    title: "Review & Realign",
    subtitle: "성장하는 회고",
    description: "우리는 빠르게 실패하고, 더 빠르게 배웁니다. 성공뿐 아니라 실패의 원인까지 가감 없이 리뷰하고, 다음 실행에 즉시 반영합니다.",
  },
  {
    tag: "05",
    title: "One Team, One IGAWORKS",
    subtitle: "원팀 시너지",
    description: "우리는 조직이 아니라 '문제'를 기준으로 협업합니다. 필요한 일이라면 경계를 넘고, 역할은 유연하게 확장합니다. 우리의 고객에게는 여러 조직이 아닌, 하나의 IGAWORKS로 경험되도록 일합니다.",
  },
];

const colleagues = [
  {
    tag: "Problem Solver",
    tagline: "Start with the problem, not the solution",
    subtitle: "단순한 해결책보다 문제를 먼저 정의하고, 본질에 집중하는 사람.",
    description: "남들이 서둘러 해결책(What)을 내놓기 바쁠 때, 현상의 이면에 있는 진짜 문제(Core Problem)를 집요하게 파고드는 분을 찾습니다. 복잡한 상황 속에서도 무엇이 가장 중요한지 우선순위를 명확히 가려내어, 조직과 고객에게 가장 실질적인 가치를 만들어내는 통찰력을 가진 동료를 원합니다.",
  },
  {
    tag: "Outcome Builder",
    tagline: "Focus on outcomes, not roles or boundaries",
    subtitle: "주어진 역할에 갇히지 않고, 결과로 증명하는 사람.",
    description: "자신의 전문 분야나 부서의 이기주의에 갇히지 않고, 회사의 전체 비전과 고객의 최종 가치를 향해 기꺼이 움직이는 분을 찾습니다. 목표 달성을 위해 타 부서와 유연하게 소통하며, 파편화된 과정들을 조율해 '하나의 완벽한 결과'로 연결해 내는 책임감 있는 동료를 원합니다.",
  },
  {
    tag: "Fast Learner & Operator",
    tagline: "Move fast, learn faster, and make things happen",
    subtitle: "완벽한 계획에 집착하기보다 일단 실행하며 시장의 피드백을 듣고, 상황에 맞춰 전략과 도구(AI 등)를 유연하게 변경할 줄 아는 사람.",
    description: "정답이 없는 환경에서도 두려움 없이 실행하고, 실패마저도 더 빠른 개선을 위한 데이터로 삼는 분을 찾습니다. 특히 AI와 같은 최신 도구에 압도당하는 것이 아니라, 상황에 맞게 적극적으로 학습하고 주도적으로 활용하여 기필코 기대를 뛰어넘는 성과를 만들어내는 동료와 함께하고 싶습니다.",
  },
];

const workBenefits = [
  { icon: Clock, title: "시차 출퇴근제", description: "출퇴근 시간을 유연하게 조정해, 생활과 업무의 균형을 맞추고 효율적으로 업무에 몰입할 수 있는 환경을 제공합니다." },
  { icon: Gift, title: "리프레시 휴가", description: "근속을 기념해 휴가와 보너스를 제공하여, 충분한 휴식을 통한 재충전을 지원합니다. (2년/5년/7년/10년/15년)" },
  { icon: Coffee, title: "해피 런치", description: "급여일에는 점심시간이 2시간으로 연장되어 여유롭게 식사를 즐기고 휴식을 취할 수 있도록 하고 있습니다." },
  { icon: Heart, title: "사내 카페테리아", description: "편리하게 식사와 휴식을 취할 수 있는 공간으로, 아이스크림과 음료를 무제한으로 제공합니다." },
  { icon: Dumbbell, title: "힐링룸", description: "전문 헬스 키퍼가 상주하여 직원들의 뭉친 근육을 풀어주고, 피로 회복을 도와줍니다." },
  { icon: Sofa, title: "리프레시 룸", description: "직원들을 위한 휴게실이 마련되어 있으며, 안마 의자를 이용해 피로를 풀 수 있습니다." },
  { icon: Package, title: "웰컴 키트", description: "회사 생활에 필요한 물품들이 포함되어 있어 편리하게 회사 생활을 시작할 수 있도록 지원합니다." },
  { icon: Monitor, title: "최고급 장비 지원", description: "업무를 빠르고 효율적으로 처리할 수 있는 환경을 제공합니다." },
  { icon: BookMarked, title: "전자도서관 & 도서 구매 지원", description: "자기 계발을 위해 전자도서관에서 필요한 책을 찾아볼 수 있으며, 구매가 필요한 경우 비용을 지원하고 있습니다." },
];

const lifeBenefits = [
  { icon: Cake, title: "생일 반차 & 상품권", description: "생일은 사랑하는 사람과 함께 보내실 수 있도록 반차를 제공해 드리며, 빠질 수 없는 선물도 챙겨드립니다." },
  { icon: Star, title: "명절 선물", description: "가족과 함께 훈훈한 명절을 보내실 수 있도록, 감사의 마음을 담은 특별한 선물을 드립니다." },
  { icon: Stethoscope, title: "종합 건강검진", description: "구성원들의 건강을 지키기 위해 종합 건강검진을 지원하여, 건강을 꼼꼼히 챙길 수 있도록 도와드립니다." },
  { icon: GraduationCap, title: "자녀 입학, 졸업 휴가", description: "자녀의 입학과 졸업을 축하하며, 소중한 순간을 함께할 수 있도록 특별 휴가를 제공하고 있습니다." },
  { icon: Users, title: "다양한 경조사 지원", description: "결혼, 출산, 장례 등 다양한 경조사에 대해 휴가와 경조금을 지원하여, 중요한 순간에 함께할 수 있도록 배려합니다." },
];

const Career = () => {
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
            Culture
          </motion.h1>
          <motion.p
            className="text-body1 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            아이지에이웍스는 세계적인 수준의 데이터 테크 기술을 가진 전문가 집단을 꿈꿉니다.
            <br />
            압도적인 데이터를 기반으로 AI 머신러닝 기술을 고도화하며,
            <br />
            빠르게 성장하고 새로운 기회를 찾아 도전하는 당신을 기다리고 있습니다.
          </motion.p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="border-t border-border/40" />
      </div>

      {/* 우리가 일하는 방식 — 타임라인 레이아웃 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            className="text-heading2 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            우리가 일하는 방식
          </motion.h2>

          <div className="space-y-0">
            {wayOfWork.map((item, i) => (
              <motion.div
                key={item.tag}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 relative"
                style={{ boxShadow: i < wayOfWork.length - 1 ? "0 1px 0 0 rgba(0,0,0,0.06)" : "none" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <div className="md:col-span-1">
                  <span className="text-[hsl(225,90%,58%)] text-[14px] font-bold">{item.tag}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-[17px] md:text-[19px] font-bold text-heading leading-snug">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground mt-1">{item.subtitle}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-body2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 우리가 원하는 동료 — 풀와이드 스택 레이아웃 */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            className="text-heading2 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            우리가 원하는 동료
          </motion.h2>

          <div className="space-y-6 md:space-y-8">
            {colleagues.map((c, i) => (
              <motion.div
                key={c.tag}
                className="bg-background rounded-xl md:rounded-2xl p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Left: tag + tagline */}
                  <div className="md:w-1/3 shrink-0">
                    <span className="inline-block px-3 py-1 bg-primary/8 text-[hsl(225,90%,58%)] text-[13px] font-medium rounded-lg mb-3">
                      {c.tag}
                    </span>
                    <h3 className="text-[17px] md:text-[19px] font-bold text-heading leading-snug mb-2">
                      {c.tagline}
                    </h3>
                    <p className="text-body2 font-medium">{c.subtitle}</p>
                  </div>
                  {/* Right: description */}
                  <div className="md:w-2/3">
                    <p className="text-body2 leading-[1.8]">{c.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 복지 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h2
            className="text-heading2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            구성원들의 성장과 여유를 위한
            <br />
            아이지에이웍스만의 특별한 복지
          </motion.h2>
          <motion.p
            className="text-body1 mb-12 md:mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            아이지에이웍스는 구성원들이 업무에 몰입하고, 더욱 성장할 수 있도록 언제나 노력하고 있습니다.
          </motion.p>

          <h3 className="text-[18px] md:text-[20px] font-bold text-heading mb-6">근무환경지원</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {workBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-accent/40 rounded-xl md:rounded-2xl p-5 md:p-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              >
                <b.icon className="w-5 h-5 text-muted-foreground mb-3" />
                <h4 className="text-[15px] md:text-[16px] font-bold text-heading mb-2">{b.title}</h4>
                <p className="text-body2 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-[18px] md:text-[20px] font-bold text-heading mb-6">생활환경지원</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {lifeBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-accent/40 rounded-xl md:rounded-2xl p-5 md:p-9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              >
                <b.icon className="w-5 h-5 text-muted-foreground mb-3" />
                <h4 className="text-[15px] md:text-[16px] font-bold text-heading mb-2">{b.title}</h4>
                <p className="text-body2 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <motion.h2
            className="text-[32px] md:text-[52px] font-bold text-primary-foreground mb-5 md:mb-7 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            함께 성장할 동료를 찾고 있습니다
          </motion.h2>
          <motion.p
            className="text-body1 text-primary-foreground/70 mb-10 md:mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            아이지에이웍스에서 데이터와 AI 기술로 새로운 도전을 시작하세요.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="https://igaworks.career.greetinghr.com/ko/recruit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 md:px-12 py-4 md:py-5 bg-primary-foreground text-primary rounded-xl text-[16px] md:text-[17px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              채용공고 보기
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
