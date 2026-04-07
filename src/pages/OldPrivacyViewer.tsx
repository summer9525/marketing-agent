import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// 이전 개인정보 처리방침 데이터 import
import { Privacy160520 } from "@/data/old-privacy/privacy-160520";
import { Privacy170715 } from "@/data/old-privacy/privacy-170715";
import { Privacy171101 } from "@/data/old-privacy/privacy-171101";
import { Privacy200717 } from "@/data/old-privacy/privacy-200717";
import { Privacy210801 } from "@/data/old-privacy/privacy-210801";
import { Privacy220117 } from "@/data/old-privacy/privacy-220117";
import { Privacy230417 } from "@/data/old-privacy/privacy-230417";
import { Privacy230901 } from "@/data/old-privacy/privacy-230901";
import { Privacy241115 } from "@/data/old-privacy/privacy-241115";
import { Privacy250520 } from "@/data/old-privacy/privacy-250520";
import { Privacy251120 } from "@/data/old-privacy/privacy-251120";

const oldPrivacyMap: Record<string, { component: React.FC; title: string }> = {
  "160520": { component: Privacy160520, title: "개인정보처리방침 (2016.05.20 ~ 2017.07.14)" },
  "170715": { component: Privacy170715, title: "개인정보처리방침 (2017.07.15 ~ 2017.10.31)" },
  "171101": { component: Privacy171101, title: "개인정보처리방침 (2017.11.01 ~ 2020.07.16)" },
  "200717": { component: Privacy200717, title: "개인정보처리방침 (2020.07.17 ~ 2021.07.30)" },
  "210801": { component: Privacy210801, title: "개인정보처리방침 (2021.08.01 ~ 2022.01.16)" },
  "220117": { component: Privacy220117, title: "개인정보처리방침 (2022.01.17 ~ 2023.04.16)" },
  "230417": { component: Privacy230417, title: "개인정보처리방침 (2023.04.17 ~ 2023.08.31)" },
  "230901": { component: Privacy230901, title: "개인정보처리방침 (2023.09.01 ~ 2024.11.14)" },
  "241115": { component: Privacy241115, title: "개인정보처리방침 (2024.11.15 ~ 2025.05.20)" },
  "250520": { component: Privacy250520, title: "개인정보처리방침 (2025.05.21 ~ 2025.11.19)" },
  "251120": { component: Privacy251120, title: "개인정보처리방침 (2025.11.20 ~ 2026.02.17)" },
};

const OldPrivacyViewer = () => {
  const params = useParams();
  // /privacy/:slug 라우트에서 올 수도 있고, /privacy/:version 에서 올 수도 있음
  const version = params.version || params.slug || window.location.pathname.split("/privacy/")[1];
  const entry = version ? oldPrivacyMap[version] : undefined;

  if (!entry) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-screen-lg mx-auto px-6 text-center">
            <p className="text-body2">해당 이전 개인정보 처리방침을 찾을 수 없습니다.</p>
            <Link to="/privacy" className="text-primary underline mt-4 inline-block">현재 개인정보 처리방침으로 돌아가기</Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const Content = entry.component;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="mb-8">
            <Link to="/privacy" className="text-primary underline text-[14px]">
              ← 현재 개인정보 처리방침으로 돌아가기
            </Link>
          </div>
          <motion.div
            className="prose prose-sm max-w-none text-body2 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Content />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OldPrivacyViewer;
