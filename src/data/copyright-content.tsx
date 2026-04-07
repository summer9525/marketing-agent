export const CopyrightContent = () => (
  <>
    <h2 className="text-heading3 mb-6">주식회사 아이지에이웍스 저작권 정책</h2>
    <p className="text-body2 mb-4">데이터 활용 가이드라인</p>
    <p className="text-body2 mb-8">
      본 저작권정책은 ㈜아이지에이웍스의 서비스를 통해 제공되는 자료와 콘텐츠 등에 대한 아이지에이웍스의 권리를 보호하고
      바람직한 활용 방법을 제시하고자 마련되었습니다. 본 정책이 적용되는 아이지에이웍스의 서비스는 다음과 같습니다.
    </p>

    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-4">
      {[
        { ko: "마케팅클라우드", en: "(Marketing Cloud)", logo: "https://www.igaworks.com/assets/images/mktcloud-logo.png" },
        { ko: "디파이너리", en: "(DFINERY)", logo: "https://www.igaworks.com/assets/images/dfinery-logo.png" },
        { ko: "모바일인덱스", en: "(MobileIndex)", logo: "https://www.igaworks.com/assets/images/mobileindex-logo.png" },
        { ko: "TV인덱스", en: "(TVindex)", logo: "https://www.igaworks.com/assets/images/tv-index-logo.png" },
        { ko: "애드브릭스", en: "(adbrix)", logo: "https://www.igaworks.com/assets/images/adbrix-logo.png" },
      ].map((s) => (
        <div key={s.ko} className="flex flex-col items-center w-[140px]">
          <div className="h-[72px] flex items-center justify-center mb-3">
            <img src={s.logo} alt={s.ko} className="max-h-[72px] max-w-[140px] object-contain" />
          </div>
          <span className="text-[14px] text-heading font-medium text-center">{s.ko}</span>
          <span className="text-[13px] text-muted-foreground text-center">{s.en}</span>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-12">
      {[
        { ko: "픽스타입", en: "(FIXTYPE)", logo: "https://www.igaworks.com/assets/images/fix-type-logo.png" },
        { ko: "픽스폴리오", en: "(FIXFOLIO)", logo: "https://www.igaworks.com/assets/images/fix-folio-logo.png" },
      ].map((s) => (
        <div key={s.ko} className="flex flex-col items-center w-[140px]">
          <div className="h-[72px] flex items-center justify-center mb-3">
            <img src={s.logo} alt={s.ko} className="max-h-[72px] max-w-[140px] object-contain" />
          </div>
          <span className="text-[14px] text-heading font-medium text-center">{s.ko}</span>
          <span className="text-[13px] text-muted-foreground text-center">{s.en}</span>
        </div>
      ))}
    </div>

    <h2 className="text-heading3 mt-12 mb-4">아이지에이웍스의 저작권을 보호해 주세요.</h2>
    <p className="text-body2 mb-3">
      아이지에이웍스의 각 서비스를 통해 제공되는 모든 자료, 데이터, 콘텐츠 등(이하 "IGAW 저작물")은 저작권법에 의하여 보호받는 저작물로
      별도의 표시가 없는 한 저작권 및 관련 권리는 아이지에이웍스에 귀속됩니다.
    </p>
    <p className="text-body2 mb-8">
      따라서 아이지에이웍스는 IGAW 저작물의 위조, 변조, 복제, 배포, 제공 등 저작권법에 위배되는 저작권 침해 행위를 엄격히 금지하고 있으며,
      위반 시에는 관련 법령에 따라 민·형사 상의 책임을 지게 될 수 있습니다.
    </p>

    <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물 이용 시 아래의 가이드라인을 준수해 주세요.</h2>
    <p className="text-body2 mb-3">IGAW 저작물은 저작권법이 허용하고 있는 범위 내에서 이용될 수 있습니다.</p>
    <p className="text-body2 mb-4">IGAW 저작물을 이용하는 경우에는 다음의 사항을 반드시 준수해 주시기 바랍니다.</p>
    <ol className="list-decimal pl-5 space-y-4 text-body2 mb-8">
      <li>IGAW 저작물이 공표된 경우 '보도ㆍ비평ㆍ교육ㆍ연구 등'의 목적으로 '정당한 범위에서 공정한 관행에 합치되게 인용'될 수 있습니다. '정당한 범위에서 공정한 관행에 합치되게 인용'했는 지의 판단은 인용의 목적, 저작물의 성질, 인용된 내용과 분량, 피인용저작물을 수록한 방법과 형태, 독자의 일반적 관념, 원저작물에 대한 수요를 대체하는지의 여부 등을 종합적으로 고려하여 판단하게 됩니다.</li>
      <li>
        출처를 밝혀 활용한 저작물이 아이지에이웍스의 것이라는 점을 분명히 하여야 합니다.
        <div className="bg-muted rounded-xl p-4 mt-2 text-sm">
          <p className="font-medium mb-1">[출처 표기 예시(출처가 '모바일인덱스'인 경우)]</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>보도자료<br/>-아이지에이웍스의 '모바일인덱스'에 따르면</li>
            <li>기타 발행물<br/>-출처: 아이지에이웍스의 '모바일인덱스'</li>
          </ul>
        </div>
      </li>
      <li>아이지에이웍스의 서비스 관련 정기/부정기 리포트는 오로지 '공공의 이익을 위한 목적'으로 배포되는 것일 뿐, 언론을 통한 기사화를 목적으로 제공되지 않습니다. 언론사의 요청에 따라 아이지에이웍스가 직접 데이터를 제공하는 경우를 제외하고, 아이지에이웍스가 직접 데이터를 제공한 것으로 보일 수 있는 문구나 표현은 사용되어서는 안 됩니다.</li>
      <li>IGAW 저작물은 타인을 비방 또는 비하하거나 타인의 명예를 훼손할 목적으로 사용되어서는 안 됩니다.</li>
      <li>
        다음은 IGAW 저작물의 이용과 관련하여 금지되는 대표적인 행위입니다. 아래 행위는 회사가 정한 각 서비스의 이용조건에 위반될 수 있으며, 그 성격에 따라 저작권 침해 또는 관련 법령 위반으로 평가될 수 있습니다. 이러한 행위는 엄격히 금지되며, 위반 시 민·형사상 책임이 발생할 수 있습니다.
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>법령 또는 회사가 정한 각 서비스의 이용조건에 반하여 IGAW 저작물을 사용, 위조, 변조, 가공 또는 변형하는 행위</li>
          <li>각 서비스의 이용조건에서 명시적으로 허용된 경우를 제외하고, IGAW 저작물을 복제, 저장, 다운로드하거나 자동화된 수단 등을 이용하여 대량으로 수집(scraping)하는 행위</li>
          <li>IGAW 저작물을 (재)판매, (재)배포하거나 제3자에게 제공하는 행위</li>
          <li>IGAW 저작물을 이용하여 회사가 제공하는 서비스와 유사한 서비스 또는 회사와 경쟁 관계에 있는 서비스를 개발, 제공 또는 운영하거나, 이를 위한 데이터 또는 콘텐츠로 활용하는 행위</li>
          <li>IGAW 저작물을 인공지능 학습, 데이터셋 구축, 자동화된 분석 또는 유사한 목적을 위하여 사용하는 행위</li>
          <li>IGAW 저작물에 적용된 기술적 보호조치 또는 접근 통제 장치를 우회하거나 무력화하는 행위</li>
          <li>IGAW 저작물의 출처를 표시하지 않거나 저작자 표시·저작권 표시 기타 권리 표시를 삭제·변경하는 등 저작자의 저작인격권 또는 회사의 권리를 침해하는 행위</li>
        </ul>
      </li>
    </ol>
    <p className="text-body2 mb-8">전술한 사항 외에도, IGAW 저작물에 대한 회사 또는 권리자의 권리를 침해하거나 회사가 허용하지 아니한 방식으로 이용하는 행위는 모두 금지됩니다.</p>

    <h2 className="text-heading3 mt-12 mb-4">생성형 인공지능(AI) 콘텐츠 이용 시 다음 사항을 유의해 주세요</h2>
    <p className="text-body2 mb-4">아이지에이웍스의 일부 서비스는 생성형 인공지능(AI) 기술을 활용하여 콘텐츠를 생성하거나, 이용자가 콘텐츠를 생성할 수 있도록 지원하는 기능을 제공합니다. 서비스의 성격에 따라 생성되는 콘텐츠의 권리 관계 및 이용 방식이 달라질 수 있으므로 다음 사항에 유의하시기 바랍니다.</p>
    <ol className="list-decimal pl-5 space-y-4 text-body2 mb-8">
      <li>
        <span className="font-medium">회사가 생성·제작한 AI 콘텐츠(FIXTYPE 등)</span>
        <p className="mt-1">
          픽스타입(FIXTYPE)과 같이 회사가 생성형 인공지능(AI) 기술을 활용하여 직접 제작하거나 운영하는 버츄얼 모델, 이미지, 영상 및 기타 콘텐츠는
          아이지에이웍스가 제작·관리하는 콘텐츠로서, 관련 법령에 따라 아이지에이웍스 또는 정당한 권리자에게 저작권 및 관련 권리가 귀속됩니다.
        </p>
      </li>
      <li>
        <span className="font-medium">이용자가 생성하는 AI 콘텐츠(FIXFOLIO 등)</span>
        <p className="mt-1">
          픽스폴리오(FIXFOLIO)와 같이 이용자가 생성형 인공지능(AI) 기술을 활용하여 콘텐츠를 생성할 수 있도록 제공되는 서비스의 경우,
          해당 결과물의 저작권 또는 지식재산권의 성립 여부 및 권리 귀속은 「저작권법」 등 관련 법령에 따라 개별적으로 판단될 수 있습니다.
          아이지에이웍스는 이용자가 생성한 콘텐츠의 권리 귀속 또는 권리 보호 여부를 보장하지 않으며, 해당 콘텐츠의 사용, 게시, 배포 또는 상업적 이용과 관련하여
          제3자의 저작권, 초상권, 퍼블리시티권, 상표권 등 권리를 침해하지 않도록 이용자가 스스로 확인하고 책임 있게 이용하여야 합니다.
        </p>
      </li>
    </ol>

    <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물의 데이터 활용에 따른 책임 제한에 유의해 주세요.</h2>
    <p className="text-body2 mb-3">
      아이지에이웍스의 일부 서비스에서 제공되는 데이터 및 지표는 독자적인 분석 방법, 추정 알고리즘 기술 및 머신러닝 기법 등을 기반으로 산출된
      분석·추정 정보입니다. 이러한 정보는 다양한 데이터 소스와 분석 기준을 바탕으로 생성되는 것으로서 실제 값과 차이가 발생할 수 있으며,
      아이지에이웍스는 해당 정보의 정확성, 신뢰성 또는 특정 목적에의 적합성 등에 대하여 어떠한 보증도 하지 않습니다. 따라서 해당 정보는 참고자료의 성격으로
      활용해 주시기 바랍니다.
    </p>
    <p className="text-body2 mb-3">
      특히, 모바일인덱스와 마케팅클라우드 등 데이터 분석 서비스에서 제공되는 정보, 데이터 및 콘텐츠는 아이지에이웍스의 분석 기술을 기반으로 국내
      모바일 앱 시장의 Usage Data(이용성 데이터)와 App Market Data(매출 추정치 데이터) 등을 종합적으로 분석하여 산출된 추정
      결과 값을 포함하고 있으며, 이와 같은 데이터는 분석 기준 및 데이터 정의에 따라 동일한 명칭의 지표라 하더라도 값이나 해석에 차이가 발생할 수
      있습니다.
    </p>
    <p className="text-body2 mb-8">
      아이지에이웍스는 이러한 데이터의 특성 또는 분석 기준의 차이로 인하여 발생하는 손해에 대하여 책임을 부담하지 않으며, 이용자가 IGAW 저작물에
      포함된 데이터 또는 정보를 활용하거나 신뢰함으로써 발생하는 손해 및 이에 따른 분쟁에 대하여도 책임이나 개입 의무를 부담하지 않습니다.
    </p>

    <h2 className="text-heading3 mt-12 mb-4">IGAW 저작물을 활용할 때 데이터 기준을 정확히 사용해 주세요.</h2>
    <p className="text-body2 mb-3">
      아이지에이웍스의 서비스(모바일인덱스, 마케팅클라우드, 티비인덱스 등)를 통해 제공되는 데이터와 지표는 특정 기준과 산정 방식에 따라 분석·가공된
      정보입니다. IGAW 저작물을 인용하거나 활용하는 경우에는 해당 데이터의 제공 범위, 지표의 의미 및 산정 기준을 정확히 표시하여야 합니다.
      특히 동일한 명칭의 지표라 하더라도 서비스 또는 분석 기준에 따라 정의와 산정 방식이 달라질 수 있으므로, 데이터를 활용할 때에는 해당 지표의
      의미와 기준을 정확히 확인하고 사용하여야 합니다.
    </p>
    <div className="overflow-x-auto mt-3 mb-4">
      <table className="w-full text-sm border-collapse border border-border">
        <thead>
          <tr className="bg-muted">
            <th className="border border-border px-3 py-2 text-left">모바일인덱스 지표 정의</th>
            <th className="border border-border px-3 py-2 text-left">TV INDEX 지표 정의</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-border px-3 py-2 align-top">
              <p>제공범위 : Android OS 또는 iOS 또는 Android OS+iOS</p>
              <p className="mt-1">신규 설치기기 : 동일 사용자의 재설치를 배제한 앱 설치 수</p>
              <p className="mt-1">총 설치기기 : 특정 시점, 앱이 설치된 모바일 단말기 수</p>
              <p className="mt-1">활성 사용자 수(DAU/WAU/MAU) : 각 일·주·월 기준 순 방문자 수</p>
              <p className="mt-1">사용률 : 사용자수 / 총 설치기기</p>
              <p className="mt-1">1인당 평균 사용시간 일간 : 해당 기간의 총 사용시간 / 활성 사용자 수</p>
            </td>
            <td className="border border-border px-3 py-2 align-top">
              <p>시청자 수 : 특정 채널 또는 프로그램을 분석 기간 동안 한 번 이상 시청한 고유 시청자 수</p>
              <p className="mt-1">총 시청시간 : 특정 채널, 프로그램의 전체 시청시간 합계</p>
              <p className="mt-1">인당 시청시간 : 총 시청시간 / 시청자 수</p>
              <p className="mt-1">도달률(%) : 분석 타겟의 시청자수 / 분석 타겟의 모집단</p>
              <p className="mt-1">1분 시청자 수 : 특정 채널, 프로그램의 1분 단위 시청자 수</p>
              <p className="mt-1">시청률(%) : 1분 시청자 수 / 전체 1분 시청자 수</p>
              <p className="mt-1">시청 점유율(%) : 전체 채널 시청률 대비 특정 채널 시청률 비중</p>
              <p className="mt-1">시청시간 점유율(%) : 전체 채널 총 시청시간 대비 해당 채널 총 시청시간 비중</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-body2 mb-8">
      데이터의 기준이나 산정 방식이 명확하게 제시되지 않은 상태에서 지표가 사용될 경우 데이터의 의미가 왜곡되거나 오해가 발생할 수 있으므로,
      IGAW 저작물을 인용하거나 활용할 때에는 관련 지표의 정의와 기준을 함께 명확히 표시해 주시기 바랍니다.
    </p>

    <p className="text-body2 mt-12 text-muted-foreground">
      본 정책 및 IGAW 저작물 활용에 대한 자세한 문의는 ㈜아이지에이웍스(help@igaworks.com)로 연락주시기 바랍니다.
    </p>
  </>
);
