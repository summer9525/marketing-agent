import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// 이전 약관 데이터 lazy import
import { Dfinery230601 } from "@/data/old-terms/dfinery-230601";
import { Dfinery230531 } from "@/data/old-terms/dfinery-230531";
import { Dfinery210831 } from "@/data/old-terms/dfinery-210831";
import { Mobileindex20220801 } from "@/data/old-terms/mobileindex-20220801";
import { Mobileindex20210924 } from "@/data/old-terms/mobileindex-20210924";
import { Mobileindex20160701 } from "@/data/old-terms/mobileindex-20160701";

const oldTermMap: Record<string, { component: React.FC; title: string; currentPath: string }> = {
  "dfinery/230601": { component: Dfinery230601, title: "디파이너리 이용약관 (2023.06.01)", currentPath: "/term/dfinery" },
  "dfinery/230531": { component: Dfinery230531, title: "디파이너리 이용약관 (2021.09.01~2023.05.31)", currentPath: "/term/dfinery" },
  "dfinery/210831": { component: Dfinery210831, title: "디파이너리 이용약관 (2021.04.23~2021.08.31)", currentPath: "/term/dfinery" },
  "mobileindex/20220801": { component: Mobileindex20220801, title: "모바일인덱스 이용약관 (2022.08.01)", currentPath: "/term/mobileindex" },
  "mobileindex/20210924": { component: Mobileindex20210924, title: "모바일인덱스 이용약관 (2021.09.24)", currentPath: "/term/mobileindex" },
  "mobileindex/20160701": { component: Mobileindex20160701, title: "모바일인덱스 이용약관 (2016.07.01)", currentPath: "/term/mobileindex" },
};

const OldTermViewer = () => {
  const { slug, version } = useParams();
  const key = `${slug}/${version}`;
  const entry = oldTermMap[key];

  if (!entry) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-screen-lg mx-auto px-6 text-center">
            <p className="text-body2">해당 이전 약관을 찾을 수 없습니다.</p>
            <Link to="/term/dfinery" className="text-primary underline mt-4 inline-block">현재 약관으로 돌아가기</Link>
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
            <Link to={entry.currentPath} className="text-primary underline text-[14px]">
              ← 현재 약관으로 돌아가기
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

export default OldTermViewer;
