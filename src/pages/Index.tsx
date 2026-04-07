import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AIPipelineSection from "@/components/AIPipelineSection";
import SolutionsSection from "@/components/SolutionsSection";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import SCISection from "@/components/SCISection";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementPopup />
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
