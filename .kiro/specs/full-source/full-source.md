# IGAWorks 홈페이지 — 전체 소스 코드 레퍼런스

Kiro에서 이 프로젝트를 재현하기 위한 전체 코드입니다.

---

## Tech Stack & Dependencies

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3.x + custom design tokens (`src/index.css`)
- **Animation**: Framer Motion 12.x
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **UI Library**: shadcn/ui (Radix primitives)
- **Toast**: Sonner
- **Path Alias**: `@/` → `./src/`

### package.json (핵심 의존성)

```
react, react-dom, react-router-dom, framer-motion, lucide-react, sonner,
@tanstack/react-query, tailwind-merge, clsx, class-variance-authority,
tailwindcss, tailwindcss-animate, autoprefixer, postcss
```

---

## 프로젝트 구조

```
src/
├── main.tsx                    # 엔트리포인트
├── App.tsx                     # 라우터 설정
├── App.css                     # (미사용, Vite 기본)
├── index.css                   # 글로벌 스타일 + 디자인 토큰
├── lib/utils.ts                # cn() 유틸리티
├── assets/                     # 이미지 에셋
│   ├── hero-bg.jpg
│   ├── logo-igaworks.png
│   ├── card-*.jpg              # 솔루션 카드 이미지들
│   └── reference.png
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── AIPipelineSection.tsx
│   ├── SolutionsSection.tsx
│   ├── SCISection.tsx
│   ├── BrandsSection.tsx
│   ├── CTASection.tsx
│   ├── NewsletterSection.tsx
│   ├── Footer.tsx
│   ├── NavLink.tsx
│   └── ui/                     # shadcn/ui 컴포넌트
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── pages/
    ├── Index.tsx               # 메인 페이지
    └── NotFound.tsx
```

---

## 1. 설정 파일

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IGAWorks — Built on Data. Driven by AI.</title>
    <meta name="description" content="AI · 머신러닝 기술 기반 데이터 마케팅 플랫폼 IGAWorks">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

### `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        freesentation: ["'Freesentation'", "'Pretendard Variable'", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        heading: "hsl(var(--color-heading))",
        body1: "hsl(var(--color-body1))",
        body2: "hsl(var(--color-body2))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "16px",
        "3xl": "24px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 2. 글로벌 스타일 (`src/index.css`)

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
@import url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2');

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Freesentation';
  font-weight: 900;
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
}
@font-face {
  font-family: 'Freesentation';
  font-weight: 700;
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-7Bold.woff2') format('woff2');
}
@font-face {
  font-family: 'Freesentation';
  font-weight: 500;
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-5Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'Freesentation';
  font-weight: 400;
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-4Regular.woff2') format('woff2');
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 16% 12%;
    --card: 0 0% 100%;
    --card-foreground: 220 16% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 16% 12%;
    --primary: 220 16% 12%;
    --primary-foreground: 0 0% 100%;
    --secondary: 216 14% 93%;
    --secondary-foreground: 220 16% 12%;
    --muted: 216 14% 93%;
    --muted-foreground: 215 14% 34%;
    --accent: 216 14% 96%;
    --accent-foreground: 220 16% 12%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 220 16% 12%;
    --radius: 0.5rem;

    /* IGAWorks Design Tokens */
    --color-heading: 220 16% 12%;
    --color-body1: 214 14% 25%;
    --color-body2: 213 12% 35%;
    --color-caption: 213 12% 35%;
    --shadow-card: 0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05);
    --shadow-card-hover: 0 0 0 1px rgba(0,0,0,.03), 0 4px 8px rgba(0,0,0,.08), 0 20px 40px rgba(0,0,0,.1);
    --shadow-nav: 0 1px 0 0 rgba(0,0,0,0.05);
    --easing-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}

@layer base {
  * { @apply border-border; }
  body {
    font-family: 'Freesentation', 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsl(var(--color-body1));
    @apply bg-background;
  }
  h1, h2, h3, h4, h5, h6 {
    color: hsl(var(--color-heading));
    text-wrap: balance;
  }
}

@layer components {
  .text-heading1 {
    font-size: 56px; font-weight: 700; color: hsl(var(--color-heading));
    letter-spacing: -0.02em; line-height: 1.2;
  }
  .text-heading2 {
    font-size: 36px; font-weight: 700; color: hsl(var(--color-heading)); line-height: 1.3;
  }
  .text-body1 {
    font-size: 18px; font-weight: 500; color: hsl(var(--color-body1)); line-height: 1.6;
  }
  .text-body2 {
    font-size: 15px; font-weight: 400; color: hsl(var(--color-body2)); line-height: 1.6;
  }
  .text-caption {
    font-size: 13px; font-weight: 400; color: hsl(var(--color-body2)); letter-spacing: 0.02em;
  }
  .shadow-card { box-shadow: var(--shadow-card); }
  .shadow-card-hover { box-shadow: var(--shadow-card-hover); }
  .shadow-nav { box-shadow: var(--shadow-nav); }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }

  @media (max-width: 768px) {
    .text-heading1 { font-size: 32px; }
    .text-heading2 { font-size: 24px; }
    .text-body1 { font-size: 15px; }
  }
}
```

---

## 3. 엔트리 & 라우팅

### `src/main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### `src/App.tsx`

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 4. 페이지

### `src/pages/Index.tsx`

```tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AIPipelineSection from "@/components/AIPipelineSection";
import SolutionsSection from "@/components/SolutionsSection";
import SCISection from "@/components/SCISection";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AIPipelineSection />
      <SolutionsSection />
      <SCISection />
      <BrandsSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
```

---

## 5. 컴포넌트

### `src/components/Navbar.tsx`

```tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoIgaworks from "@/assets/logo-igaworks.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#synaptic", label: "Synaptic" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "backdrop-blur-md bg-background/80 shadow-nav" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src={logoIgaworks} alt="IGAWorks" className="h-5 md:h-6 w-auto" />
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-body2 hover:text-heading transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 md:px-6 py-2 bg-primary text-primary-foreground rounded-xl text-[13px] md:text-[14px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
            문의하기
          </button>
          
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="w-5 h-5 text-heading" /> : <Menu className="w-5 h-5 text-heading" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-[16px] font-medium text-heading rounded-lg hover:bg-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
```

### `src/components/HeroSection.tsx`

```tsx
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/30" />
      <motion.div
        className="relative z-10 text-center max-w-screen-xl mx-auto px-6 py-[12vh] md:py-[15vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-heading1 mb-4 md:mb-6" variants={item}>
          Built on Data.<br />Driven by AI.
        </motion.h1>
        <motion.p className="text-body1 mb-8 md:mb-10 max-w-2xl mx-auto" variants={item}>
          AI가 창조한 완벽한 디지털 페르소나, 마케팅의 다음 단계를 엽니다
        </motion.p>
        <motion.div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap" variants={item}>
          <button className="px-6 md:px-8 py-3 md:py-3.5 bg-primary text-primary-foreground rounded-xl text-[14px] md:text-[15px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
            문의하기
          </button>
          <button className="px-6 md:px-8 py-3 md:py-3.5 bg-background text-heading rounded-xl text-[14px] md:text-[15px] font-medium shadow-card hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
            미디어킷 보기
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
```

### `src/components/StatsSection.tsx`

```tsx
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
          className="text-[16px] md:text-[22px] font-medium text-heading text-center mb-12 md:mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          아이지에이웍스는 AI · 머신러닝 기술을 활용해<br />
          데이터에 기반한 마케팅과 비즈니스 혁신을 가능하게 합니다.
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
              <div className="text-[28px] md:text-[44px] font-bold text-heading tracking-tight mb-1 md:mb-2">
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
```

### `src/components/AIPipelineSection.tsx`

```tsx
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
          <h2 className="text-[18px] md:text-[24px] font-bold text-heading mb-2 leading-relaxed">
            데이터 중심의 새로운 마케팅 생태계
          </h2>
          <h2 className="text-heading2 mb-0">
            아이지에이웍스 AI Synthetic Consumer Intelligence(SCI)
          </h2>
        </motion.div>

        <div className="mt-10 md:mt-16 space-y-0">
          {pipelines.map((item, i) => (
            <motion.div
              key={item.title}
              className="py-8 md:py-10 pl-6 md:pl-8 relative"
              style={{
                boxShadow: i < pipelines.length - 1 ? "0 1px 0 0 rgba(0,0,0,0.06)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="absolute left-0 top-8 md:top-10 bottom-8 md:bottom-10 w-[3px] bg-heading rounded-full" />
              <h3 className="text-[20px] md:text-[28px] font-bold text-heading mb-3 md:mb-4 tracking-tight">
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
```

### `src/components/SolutionsSection.tsx`

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Platform {
  name: string;
  description: string;
  badges?: { label: string; items: string[] }[];
}

interface Category {
  title: string;
  platforms: Platform[];
}

const categories: Category[] = [
  {
    title: "Data Infrastructure",
    platforms: [
      {
        name: "MOBILE INDEX",
        description: "국내 최대 규모 데이터 기반 모바일 앱, 게임 마켓 인텔리전스 및 앱/마켓 신용카드 결제 데이터 분석 솔루션입니다.",
      },
      {
        name: "adbrix",
        description: "광고 성과 측정부터 이용자 행동 분석 및 광고 사기 방어 기능까지 갖춘 국내 시장 최적화 모바일 어트리뷰션(MMP)입니다.",
      },
      {
        name: "TV INDEX",
        description: "IPTV 3사의 1800만 셋톱박스 실측 데이터 기반 채널 · 광고 등 TV 데이터 분석을 지원하는 솔루션입니다.",
      },
    ],
  },
  {
    title: "AI Action & Creative",
    platforms: [
      {
        name: "DFINERY",
        description: "AI 기반 데이터 활용으로 고객 데이터 분석부터 CRM까지 원스톱으로 제공하는 AI CRM 솔루션입니다.",
      },
      {
        name: "TradingWorks360",
        description: "AI Synthetic Audience 기반 타겟팅 및 정밀한 고객 예측, 자동화된 광고 캠페인을 제공하는 DSP입니다.",
        badges: [
          { label: "공식 파트너", items: ["구글 공식 파트너", "메타 공식 파트너"] },
          { label: "GFA 대행", items: ["네이버 GFA 대행"] },
        ],
      },
      {
        name: "FIXTYPE",
        description: "촬영이 필요 없는 하이엔드 TVCF급 AI 영상 제작 스튜디오입니다.",
      },
      {
        name: "Fixfolio",
        description: "광고 성과 데이터를 학습한 AI 기반 광고 소재 자동 제작 솔루션입니다.",
      },
    ],
  },
  {
    title: "Media & Network",
    platforms: [
      {
        name: "ADPOPCORN Reward",
        description: "국내 최대 규모의 데이터를 기반으로 비즈니스 성장에 필요한 사용자 확보부터 수익화까지 모두 지원하는 광고 플랫폼입니다.",
      },
      {
        name: "ADPOPCORN SSP",
        description: "모바일 앱 및 웹 퍼블리셔 전용 광고 수익화 플랫폼입니다.",
      },
    ],
  },
];

const SolutionsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-heading2 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Solutions by IGAWorks
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="hidden lg:block space-y-1">
              {categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-200 text-[15px] ${
                    activeCategory === i
                      ? "bg-accent text-heading font-bold shadow-card"
                      : "text-body2 hover:bg-accent/50"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-[13px] transition-all duration-200 shrink-0 ${
                    activeCategory === i
                      ? "bg-primary text-primary-foreground font-medium"
                      : "bg-accent text-body2"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9 min-h-[300px] lg:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {categories[activeCategory].platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="bg-primary rounded-xl md:rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="text-[16px] md:text-[18px] font-bold text-primary-foreground mb-2 md:mb-3">
                      {platform.name}
                    </h4>
                    <p className="text-[13px] md:text-[14px] text-primary-foreground/70 leading-relaxed">
                      {platform.description}
                    </p>
                    {platform.badges && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                        {platform.badges.map((group) =>
                          group.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-primary-foreground/10 text-[11px] md:text-[12px] text-primary-foreground/80"
                            >
                              {item}
                            </span>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
```

### `src/components/SCISection.tsx`

```tsx
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const SCISection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-heading2 mb-4">
            아이지에이웍스가 개발한 AI SCI는
            <br />
            기존 데이터와 플랫폼의 한계를 넘어 새로운 차원의 경쟁력을 제공합니다.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 기존 데이터 카드 */}
          <motion.div
            className="bg-card rounded-xl md:rounded-2xl shadow-card p-7 md:p-10 hover:shadow-card-hover transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-[20px] md:text-[28px] font-bold text-heading mb-6 md:mb-8">
              기존 데이터
            </h3>
            <ul className="space-y-4 md:space-y-5">
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
            className="bg-primary rounded-xl md:rounded-2xl p-7 md:p-10 hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-[20px] md:text-[28px] font-bold text-primary-foreground mb-6 md:mb-8">
              AI Synthetic Audience
            </h3>
            <ul className="space-y-4 md:space-y-5">
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
                  <span className="text-[14px] md:text-[15px] text-primary-foreground/80">{item}</span>
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
```

### `src/components/BrandsSection.tsx`

```tsx
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
          className="text-heading2 text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          with 4000+ Global Brands
        </motion.h2>

        <motion.div
          className="bg-accent/50 rounded-xl md:rounded-2xl py-8 md:py-10 px-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brandNames, ...brandNames].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="mx-5 md:mx-8 text-[13px] md:text-[15px] font-medium text-muted-foreground/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="text-caption text-center mt-5 md:mt-6"
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
```

### `src/components/CTASection.tsx`

```tsx
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.h2
          className="text-[28px] md:text-[48px] font-bold text-primary-foreground mb-4 md:mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Target your future consumer
        </motion.h2>
        <motion.p
          className="text-[15px] md:text-[17px] text-primary-foreground/70 mb-8 md:mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          지금 아이지에이웍스의 데이터와 AI 기술을 통해 미래의 소비자를 선점하세요
        </motion.p>
        <motion.button
          className="px-8 md:px-10 py-3.5 md:py-4 bg-primary-foreground text-primary rounded-xl text-[14px] md:text-[15px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          문의하기
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
```

### `src/components/NewsletterSection.tsx`

```tsx
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("올바른 이메일 주소를 입력해주세요.");
      return;
    }
    toast.success("구독이 완료되었습니다!");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
          <h3 className="text-[16px] md:text-[18px] font-bold text-heading leading-relaxed shrink-0">
            모든 디지털 마케팅의 출발지 IGAWorks에서 시작할<br className="hidden md:block" />
            수 있게 되어 반갑습니다.
          </h3>
          <div className="flex items-center bg-background rounded-xl p-1.5 w-full max-w-md" style={{ outline: "1px solid rgba(0,0,0,0.08)" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="이메일 주소를 입력하세요"
              maxLength={255}
              className="flex-1 min-w-0 bg-transparent px-4 md:px-5 py-2.5 text-[13px] md:text-[14px] text-heading placeholder:text-muted-foreground outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="shrink-0 px-4 md:px-6 py-2.5 bg-[hsl(225,90%,58%)] text-[13px] md:text-[14px] font-medium text-primary-foreground rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              구독하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
```

### `src/components/Footer.tsx`

```tsx
const footerLinks = {
  "서비스": ["공식 블로그", "개인정보 처리 방침", "저작권 정책"],
  "솔루션": ["애드브릭스", "디파이너리", "모바일인덱스", "트레이딩웍스", "애드팝콘 SSP", "애드팝콘 리워드", "TV INDEX", "픽스타입", "픽스폴리오"],
  "소셜 미디어": ["페이스북", "링크드인"],
  "채용": ["진행 중인 공고"],
  "문의": ["솔루션 문의"],
};

const Footer = () => {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "#F4F4F6" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-caption font-medium text-heading mb-3 md:mb-4">{category}</h4>
              <ul className="space-y-2 md:space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-caption text-body2 hover:text-heading transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 md:pt-8 space-y-1.5 border-t border-border/50">
          <p className="text-caption text-muted-foreground font-medium">(주)아이지에이웍스</p>
          <p className="text-caption text-muted-foreground">사업자 등록 번호 : 220-8741741</p>
          <p className="text-caption text-muted-foreground">대표 : 마국성</p>
          <p className="text-caption text-muted-foreground">주소 : 서울특별시 용산구 서빙고로 17 26층 (한강로 3가, 센트럴파크타워)</p>
          <p className="text-caption text-muted-foreground mt-4">© 2026. IGAWorks Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 6. 에셋 목록

이미지 파일은 `src/assets/`에 위치하며, Kiro에서 동일한 경로에 배치해야 합니다:

| 파일명 | 용도 |
|--------|------|
| `hero-bg.jpg` | HeroSection 배경 |
| `logo-igaworks.png` | Navbar 로고 |
| `card-mobi-index.jpg` | MOBILE INDEX 카드 |
| `card-admon.jpg` | adbrix 카드 |
| `card-tvindex.jpg` | TV INDEX 카드 |
| `card-dfinery.jpg` | DFINERY 카드 |
| `card-tradeworks.jpg` | TradingWorks360 카드 |
| `card-fixtype.jpg` | FIXTYPE 카드 |
| `card-faltalo.jpg` | Fixfolio 카드 |
| `card-adpopcorn-reward.jpg` | ADPOPCORN Reward 카드 |
| `card-adpopcorn-ssp.jpg` | ADPOPCORN SSP 카드 |
| `reference.png` | 레퍼런스 이미지 |

---

## 7. 구현 순서 (Kiro용)

1. 프로젝트 초기화 (Vite + React + TS)
2. Tailwind CSS 설정 + `index.css` 디자인 토큰 적용
3. `tailwind.config.ts` 커스텀 설정
4. 에셋 파일 배치 (`src/assets/`)
5. `lib/utils.ts` 생성
6. shadcn/ui 컴포넌트 설치 (sonner, toaster, tooltip)
7. 컴포넌트 순서대로 생성: Navbar → Hero → Stats → AIPipeline → Solutions → SCI → Brands → CTA → Newsletter → Footer
8. `pages/Index.tsx` 조합
9. `App.tsx` 라우터 설정
10. 반응형 테스트

## Tasks

- [x] 전체 소스 코드 정리 및 Kiro 스펙 문서 생성
