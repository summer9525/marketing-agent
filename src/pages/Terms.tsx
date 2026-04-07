import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OldPrivacyViewer from "./OldPrivacyViewer";

// 상단 메인 탭
const mainTabs = [
  { id: "term", label: "이용약관", basePath: "/term" },
  { id: "privacy", label: "개인정보처리방침", basePath: "/privacy" },
  { id: "copyright", label: "저작권 정책", basePath: "/copyright" },
];

// 이용약관 하위 탭
const termSubTabs = [
  { id: "dfinery", label: "디파이너리 이용약관" },
  { id: "adbrix", label: "애드브릭스 이용약관" },
  { id: "mobileindex", label: "모바일인덱스 이용약관" },
  { id: "tvindex", label: "TV INDEX 이용약관" },
  { id: "tradingworks", label: "트레이딩웍스 이용약관" },
  { id: "advertisement", label: "광고서비스 이용약관" },
];

// 개인정보처리방침 하위 탭
const privacySubTabs = [
  { id: "main", label: "개인정보처리방침" },
  { id: "custom_ad", label: "맞춤형 광고" },
];

import { DfineryTerm } from "@/data/term-dfinery";
import { AdbrixTerm } from "@/data/term-adbrix";
import { MobileindexTerm } from "@/data/term-mobileindex";
import { TvindexTerm } from "@/data/term-tvindex";
import { TradingworksTerm } from "@/data/term-tradingworks";
import { AdvertisementTerm } from "@/data/term-advertisement";
import { PrivacyContent } from "@/data/privacy-content";
import { CustomAdContent } from "@/data/privacy-custom-ad";
import { CopyrightContent } from "@/data/copyright-content";

const Terms = () => {
  const { "*": splat } = useParams();
  const navigate = useNavigate();

  // URL 파싱
  const pathParts = (splat || "").split("/").filter(Boolean);
  // /term, /term/dfinery, /privacy, /privacy/custom_ad, /copyright
  
  // 현재 경로에서 메인탭과 서브탭 결정
  const currentPath = window.location.pathname;
  
  let activeMainTab = "term";
  let activeSubTab = "";

  if (currentPath.startsWith("/copyright")) {
    activeMainTab = "copyright";
  } else if (currentPath.startsWith("/privacy")) {
    activeMainTab = "privacy";
    const privacySlug = currentPath.replace("/privacy/", "").replace("/privacy", "");
    // 숫자로만 된 slug는 이전 개인정보 처리방침 버전
    if (/^\d+$/.test(privacySlug)) {
      return <OldPrivacyViewer />;
    }
    if (currentPath === "/privacy/custom_ad") {
      activeSubTab = "custom_ad";
    } else {
      activeSubTab = "main";
    }
  } else if (currentPath.startsWith("/term")) {
    activeMainTab = "term";
    const termSlug = currentPath.replace("/term/", "").replace("/term", "");
    activeSubTab = termSlug || "dfinery";
  }

  const renderContent = () => {
    if (activeMainTab === "copyright") return <CopyrightContent />;
    if (activeMainTab === "privacy") {
      if (activeSubTab === "custom_ad") return <CustomAdContent />;
      return <PrivacyContent />;
    }
    // term
    switch (activeSubTab) {
      case "adbrix": return <AdbrixTerm />;
      case "mobileindex": return <MobileindexTerm />;
      case "tvindex": return <TvindexTerm />;
      case "tradingworks": return <TradingworksTerm />;
      case "advertisement": return <AdvertisementTerm />;
      default: return <DfineryTerm />;
    }
  };

  const subTabs = activeMainTab === "term" ? termSubTabs : activeMainTab === "privacy" ? privacySubTabs : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-screen-lg mx-auto px-6">
          {/* 메인 탭 */}
          <div className="flex gap-6 md:gap-10 border-b border-border mb-6">
            {mainTabs.map((tab) => {
              const isActive = activeMainTab === tab.id;
              const href = tab.id === "term" ? "/term/dfinery" : tab.id === "privacy" ? "/privacy" : "/copyright";
              return (
                <Link
                  key={tab.id}
                  to={href}
                  className={`pb-3 text-[15px] md:text-[16px] font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-heading border-b-2 border-heading"
                      : "text-muted-foreground hover:text-heading"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* 서브 탭 */}
          {subTabs && (
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
              {subTabs.map((sub) => {
                const isActive = activeSubTab === sub.id;
                const href = activeMainTab === "term" ? `/term/${sub.id}` : activeMainTab === "privacy" ? (sub.id === "main" ? "/privacy" : `/privacy/${sub.id}`) : "";
                return (
                  <Link
                    key={sub.id}
                    to={href}
                    className={`px-4 py-2 rounded-lg text-[13px] md:text-[14px] font-medium transition-all ${
                      isActive
                        ? "bg-heading text-white"
                        : "bg-muted text-muted-foreground hover:bg-accent hover:text-heading"
                    }`}
                  >
                    {sub.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* 콘텐츠 */}
          <motion.div
            key={`${activeMainTab}-${activeSubTab}`}
            className="prose prose-sm max-w-none text-body2 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
