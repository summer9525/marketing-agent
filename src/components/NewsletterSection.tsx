import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyk1lcfk169r46Kgv52lm5_7nPvaV0r7X7YFGOI_AgXWpJYfbYXurkZqOsdF7gKK6af4w/exec";

  const handleSubscribe = async () => {
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("올바른 이메일 주소를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ type: "newsletter", email: trimmed }),
      });
      toast.success("구독이 완료되었습니다!");
      setEmail("");
    } catch {
      toast.error("구독 신청에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
          <h3 className="text-body1 md:text-[22px] font-bold text-heading leading-relaxed shrink-0">
            뉴스레터 구독하기
          </h3>
          <div className="flex items-center bg-background rounded-xl p-1.5 w-full max-w-md" style={{ outline: "1px solid rgba(0,0,0,0.08)" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="이메일 주소를 입력하세요"
              maxLength={255}
              className="flex-1 min-w-0 bg-transparent px-4 md:px-5 py-3 text-[15px] md:text-[16px] text-heading placeholder:text-muted-foreground outline-none"
            />
            <button
              onClick={handleSubscribe}
              disabled={isSubmitting}
              className="shrink-0 px-5 md:px-7 py-3 bg-[hsl(225,90%,58%)] text-[14px] md:text-[15px] font-medium text-primary-foreground rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "처리 중..." : "구독하기"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
