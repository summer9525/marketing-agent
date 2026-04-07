import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-screen-md mx-auto px-6">
          <motion.h1
            className="text-heading1 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            주식회사 아이지에이웍스 저작권 정책
          </motion.h1>

          <motion.div
            className="prose prose-sm max-w-none text-body2 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-body2 mb-4">데이터 활용 가이드라인</p>
            <p className="text-body2 mb-8">
              본 저작권정책은 ㈜아이지에이웍스의 서비스를 통해 제공되는 자료와 콘텐츠 등에 대한 아이지에이웍스의 권리를 보호하고
              바람직한 활용 방법을 제시하고자 마련되었습니다.
            </p>

            <p className="text-body2 mb-4">본 정책이 적용되는 아이지에이웍스의 서비스:</p>
            <ul className="list-disc pl-5 space-y-1 text-body2 mb-8">
              <li>마케팅클라우드 (Marketing Cloud)</li>
              <li>디파이너리 (DFINERY)</li>
              <li>모바일인덱스 (MobileIndex)</li>
              <li>TV인덱스 (TVindex)</li>
              <li>애드브릭스 (adbrix)</li>
              <li>픽스타입 (FIXTYPE)</li>
              <li>픽스폴리오 (FIXFOLIO)</li>
            </ul>

            {/* 저작권 보호 */}
            <h2 className="text-heading3 mt-12 mb-4">아이지에이웍스의 저작권을 보호해 주세요.</h2>
            <p className="text-body2 mb-3">
              아이지에이웍스의 각 서비스를 통해 제공되는 모든 자료, 데이터, 콘텐츠 등(이하 "IGAW 저작물")은 저작권법에 의하여 보호받는 저작물로
              별도의 표시가 없는 한 저작권 및 관련 권리는 아이지에이웍스에 귀속됩니다.
            </p>
            <p className="text-body2 mb-8">
              따라서 아이지에이웍스는 IGAW 저작물의 위조, 변조, 복제, 배포, 제공 등 저작권법에 위배되는 저작권 침해 행위를 엄격히 금지하고 있으며,
              위반 시에는 관련 법령에 따라 민·형사 상의 책임을 지게 될 수 있습니다.
            </p>

            {/* 가이드라인 */}
            <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물 이용 시 아래의 가이드라인을 준수해 주세요.</h2>
            <p className="text-body2 mb-3">IGAW 저작물은 저작권법이 허용하고 있는 범위 내에서 이용될 수 있습니다.</p>
            <ol className="list-decimal pl-5 space-y-4 text-body2 mb-8">
              <li>
                IGAW 저작물이 공표된 경우 '보도·비평·교육·연구 등'의 목적으로 '정당한 범위에서 공정한 관행에 합치되게 인용'될 수 있습니다.
              </li>
              <li>
                출처를 밝혀 활용한 저작물이 아이지에이웍스의 것이라는 점을 분명히 하여야 합니다.
                <div className="bg-muted rounded-xl p-4 mt-2 text-sm">
                  <p className="font-medium mb-1">출처 표기 예시 (출처가 '모바일인덱스'인 경우)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>보도자료: 아이지에이웍스의 '모바일인덱스'에 따르면</li>
                    <li>기타 발행물: 출처: 아이지에이웍스의 '모바일인덱스'</li>
                  </ul>
                </div>
              </li>
              <li>
                아이지에이웍스의 서비스 관련 리포트는 오로지 '공공의 이익을 위한 목적'으로 배포되는 것일 뿐, 언론을 통한 기사화를 목적으로 제공되지 않습니다.
              </li>
              <li>IGAW 저작물은 타인을 비방 또는 비하하거나 타인의 명예를 훼손할 목적으로 사용되어서는 안 됩니다.</li>
              <li>
                다음은 IGAW 저작물의 이용과 관련하여 금지되는 대표적인 행위입니다:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>법령 또는 이용조건에 반하여 IGAW 저작물을 사용, 위조, 변조, 가공 또는 변형하는 행위</li>
                  <li>IGAW 저작물을 복제, 저장, 다운로드하거나 자동화된 수단 등을 이용하여 대량으로 수집(scraping)하는 행위</li>
                  <li>IGAW 저작물을 (재)판매, (재)배포하거나 제3자에게 제공하는 행위</li>
                  <li>IGAW 저작물을 이용하여 경쟁 관계에 있는 서비스를 개발, 제공 또는 운영하는 행위</li>
                  <li>IGAW 저작물을 인공지능 학습, 데이터셋 구축, 자동화된 분석 등의 목적으로 사용하는 행위</li>
                  <li>IGAW 저작물에 적용된 기술적 보호조치 또는 접근 통제 장치를 우회하거나 무력화하는 행위</li>
                  <li>IGAW 저작물의 출처를 표시하지 않거나 저작자 표시·저작권 표시를 삭제·변경하는 행위</li>
                </ul>
              </li>
            </ol>

            {/* 생성형 AI */}
            <h2 className="text-heading3 mt-12 mb-4">생성형 인공지능(AI) 콘텐츠 이용 시 다음 사항을 유의해 주세요.</h2>
            <ol className="list-decimal pl-5 space-y-4 text-body2 mb-8">
              <li>
                <span className="font-medium">회사가 생성·제작한 AI 콘텐츠 (FIXTYPE 등)</span>
                <p className="mt-1">
                  픽스타입(FIXTYPE)과 같이 회사가 생성형 인공지능(AI) 기술을 활용하여 직접 제작하거나 운영하는 버츄얼 모델, 이미지, 영상 및 기타 콘텐츠는
                  아이지에이웍스가 제작·관리하는 콘텐츠로서, 관련 법령에 따라 아이지에이웍스 또는 정당한 권리자에게 저작권 및 관련 권리가 귀속됩니다.
                </p>
              </li>
              <li>
                <span className="font-medium">이용자가 생성하는 AI 콘텐츠 (FIXFOLIO 등)</span>
                <p className="mt-1">
                  픽스폴리오(FIXFOLIO)와 같이 이용자가 생성형 인공지능(AI) 기술을 활용하여 콘텐츠를 생성할 수 있도록 제공되는 서비스의 경우,
                  해당 결과물의 저작권 또는 지식재산권의 성립 여부 및 권리 귀속은 「저작권법」 등 관련 법령에 따라 개별적으로 판단될 수 있습니다.
                  아이지에이웍스는 이용자가 생성한 콘텐츠의 권리 귀속 또는 권리 보호 여부를 보장하지 않습니다.
                </p>
              </li>
            </ol>

            {/* 책임 제한 */}
            <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물의 데이터 활용에 따른 책임 제한에 유의해 주세요.</h2>
            <p className="text-body2 mb-3">
              아이지에이웍스의 일부 서비스에서 제공되는 데이터 및 지표는 독자적인 분석 방법, 추정 알고리즘 기술 및 머신러닝 기법 등을 기반으로 산출된
              분석·추정 정보입니다. 이러한 정보는 실제 값과 차이가 발생할 수 있으며, 아이지에이웍스는 해당 정보의 정확성, 신뢰성 또는 특정 목적에의
              적합성 등에 대하여 어떠한 보증도 하지 않습니다.
            </p>
            <p className="text-body2 mb-8">
              아이지에이웍스는 데이터의 특성 또는 분석 기준의 차이로 인하여 발생하는 손해에 대하여 책임을 부담하지 않으며,
              이용자가 IGAW 저작물에 포함된 데이터 또는 정보를 활용하거나 신뢰함으로써 발생하는 손해 및 이에 따른 분쟁에 대하여도 책임이나 개입 의무를 부담하지 않습니다.
            </p>

            {/* 데이터 기준 */}
            <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물을 활용할 때 데이터 기준을 정확히 사용해 주세요.</h2>
            <p className="text-body2 mb-8">
              아이지에이웍스의 서비스를 통해 제공되는 데이터와 지표는 특정 기준과 산정 방식에 따라 분석·가공된 정보입니다.
              IGAW 저작물을 인용하거나 활용하는 경우에는 해당 데이터의 제공 범위, 지표의 의미 및 산정 기준을 정확히 표시하여야 합니다.
            </p>

            <p className="text-body2 mt-12 text-muted-foreground">
              본 정책 및 IGAW 저작물 활용에 대한 자세한 문의는 ㈜아이지에이웍스(help@igaworks.com)로 연락주시기 바랍니다.
            </p>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Copyright;
