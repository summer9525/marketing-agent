import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const concernOptions = {
  "데이터 분석": [
    "앱 시장·경쟁사 분석",
    "광고 성과 측정",
    "TV 시청률·광고 분석",
  ],
  "AI 액션 & 크리에이티브": [
    "AI CRM·개인화 마케팅",
    "핵심 고객 타겟 광고",
    "AI 광고 영상 제작",
    "AI 광고 소재 제작",
  ],
  "미디어 & 네트워크": [
    "리워드 광고",
    "매체 수익화(SSP)",
    "기타",
  ],
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    additionalTitle: "",
    additionalMessage: "",
  });
  const [concerns, setConcerns] = useState<string[]>([]);
  const [privacyRequired, setPrivacyRequired] = useState(false);
  const [marketingOptional, setMarketingOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleConcern = (item: string) => {
    setConcerns((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyk1lcfk169r46Kgv52lm5_7nPvaV0r7X7YFGOI_AgXWpJYfbYXurkZqOsdF7gKK6af4w/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.company.trim()) {
      toast.error("필수 항목을 모두 입력해 주세요.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("올바른 이메일 주소를 입력해 주세요.");
      return;
    }
    if (!privacyRequired) {
      toast.error("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      department: form.department.trim(),
      inquiryTypes: concerns.join(", "),
      privacy: privacyRequired ? "Y" : "N",
      marketing: marketingOptional ? "Y" : "N",
      additionalTitle: form.additionalTitle.trim(),
      message: form.additionalMessage.trim(),
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });

      toast.success("문의가 성공적으로 접수되었습니다.");
      setForm({ name: "", email: "", phone: "", company: "", department: "", additionalTitle: "", additionalMessage: "" });
      setConcerns([]);
      setPrivacyRequired(false);
      setMarketingOptional(false);
    } catch {
      toast.error("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.h1
            className="text-heading1 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            아이지에이웍스의
            <br />
            데이터와 AI 기술로
            <br />
            비즈니스를 성장시키세요.
          </motion.h1>
        </div>
      </section>

      <hr className="border-border max-w-screen-md mx-auto" />

      {/* Form */}
      <section className="py-16 md:py-24">
        <motion.form
          className="max-w-screen-md mx-auto px-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          {/* 기본 정보 */}
          <h3 className="text-heading3 mb-6">기본 정보</h3>
          <div className="space-y-3.5 mb-10">
            <input
              type="text"
              placeholder="이름*"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="회사 이메일*"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={255}
            />
            <input
              type="tel"
              placeholder="휴대 전화*"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={20}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="회사명*"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={100}
              />
              <input
                type="text"
                placeholder="부서명*"
                value={form.department}
                onChange={(e) => handleChange("department", e.target.value)}
                className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                maxLength={100}
              />
            </div>
          </div>

          {/* 어떤 고민이 있으신가요? */}
          <h3 className="text-heading3 mb-5">어떤 고민이 있으신가요?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 mb-10">
            {Object.entries(concernOptions).map(([category, items]) => (
              <div key={category}>
                <p className="text-[15px] font-medium text-heading mb-3">{category}</p>
                <div className="space-y-2.5">
                  {items.map((item) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer group">
                      <span
                        className={`w-[18px] h-[18px] rounded flex items-center justify-center border transition-colors ${
                          concerns.includes(item)
                            ? "bg-primary border-primary"
                            : "border-border bg-background"
                        }`}
                        onClick={() => toggleConcern(item)}
                      >
                        {concerns.includes(item) && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span
                        className="text-body2 group-hover:text-heading transition-colors"
                        onClick={() => toggleConcern(item)}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 개인정보 동의 */}
          <h3 className="text-heading3 mb-5">개인정보 동의</h3>
          <div className="space-y-3.5 mb-10">
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <span
                className={`mt-0.5 w-[18px] h-[18px] rounded flex items-center justify-center border transition-colors shrink-0 ${
                  privacyRequired ? "bg-primary border-primary" : "border-border bg-background"
                }`}
                onClick={() => setPrivacyRequired(!privacyRequired)}
              >
                {privacyRequired && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-body2" onClick={() => setPrivacyRequired(!privacyRequired)}>
                (필수) 문의를 위해 개인정보 수집 및 이용에 동의해 주세요.
              </span>
            </label>
            <label className="flex items-start gap-2.5 cursor-pointer group">
              <span
                className={`mt-0.5 w-[18px] h-[18px] rounded flex items-center justify-center border transition-colors shrink-0 ${
                  marketingOptional ? "bg-primary border-primary" : "border-border bg-background"
                }`}
                onClick={() => setMarketingOptional(!marketingOptional)}
              >
                {marketingOptional && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-body2" onClick={() => setMarketingOptional(!marketingOptional)}>
                (선택) 아이지에이웍스의 소식과 혜택을 이메일로 받아보시려면 개인정보 수집 및 마케팅 활용에 동의해 주세요.
              </span>
            </label>
          </div>

          {/* 추가 정보 */}
          <h3 className="text-heading3 mb-5">추가 정보</h3>
          <div className="space-y-3.5 mb-12">
            <input
              type="text"
              placeholder="제목"
              value={form.additionalTitle}
              onChange={(e) => handleChange("additionalTitle", e.target.value)}
              className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              maxLength={200}
            />
            <textarea
              placeholder="내용을 입력해 주세요."
              value={form.additionalMessage}
              onChange={(e) => handleChange("additionalMessage", e.target.value)}
              className="w-full rounded-xl bg-muted border-0 px-5 py-4 text-body2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-none"
              maxLength={2000}
            />
          </div>

          {/* 제출 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-primary text-primary-foreground rounded-xl text-[17px] font-medium hover:opacity-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#445DDC" }}
          >
            {isSubmitting ? "전송 중..." : "제출하기"}
          </button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
