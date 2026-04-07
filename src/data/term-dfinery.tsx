export const DfineryTerm = () => (
  <>
    <h2 className="text-heading3 mb-6">디파이너리 서비스 이용약관</h2>

    {/* 제 1 장 총칙 */}
    <h2 className="text-heading3 mt-14 mb-6">제 1 장 총칙</h2>

    {/* 제1조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 1 조 (목적)</h3>
    <p className="text-body2 mb-3">
      본 약관은 주식회사 아이지에이웍스(이하 &quot;회사&quot;)가 제공하는 디파이너리 솔루션(이하 &quot;솔루션&quot;)의 이용과 관련하여 &quot;회사&quot;와 &quot;회원사&quot; 간 권리와 의무, 책임사항 및 기타 필요한 사항을 규정하는데 그 목적이 있습니다.
    </p>

    {/* 제2조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 2 조 (용어의 정의)</h3>
    <p className="text-body2 mb-3">
      본 약관에서 사용하는 용어의 정의는 아래와 같습니다.
    </p>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;데이터 연결 도구&quot;라 함은 &quot;솔루션&quot;이 &quot;회원사 서비스&quot;에서 기능할 수 있도록 제공되는 소프트웨어 개발 도구를 의미합니다.</li>
      <li>&quot;디파이너리 사이트&quot;라 함은 &quot;솔루션&quot; 제공 및 이용을 위해 &quot;회사&quot;가 운영하는 웹사이트(console.dfinery.ai, docs.dfinery.ai, dfinery.io, console.dfinery.io, help.dfinery.io 등)를 의미합니다.</li>
      <li>&quot;디파이너리 콘솔&quot;(console.dfinery.ai, console.dfinery.io)이라 함은 &quot;솔루션&quot;이 제공 및 관리되는 사이트를 의미합니다.</li>
      <li>&quot;회원사&quot;라 함은 &quot;디파이너리 콘솔&quot;에 접속하여 본 약관에 동의함으로 &quot;회사&quot;와 이용계약을 체결하고 &quot;솔루션&quot;을 이용하는 주체를 의미합니다.</li>
      <li>&quot;대행사&quot;라 함은 &quot;회사&quot;의 사전 승인 하에 &quot;회원사&quot;로부터 &quot;솔루션&quot; 이용에 관한 권리 및 권한을 부여 받고 &quot;회원사&quot;를 대신하여 &quot;솔루션&quot; 이용에 관한 의무(예, 대금 지급 등)를 이행하기로 약정한 자를 의미합니다.</li>
      <li>&quot;계정&quot;이라 함은 &quot;디파이너리 콘솔&quot;에서 &quot;회원사 서비스&quot;가 관리되는 단위를 의미합니다.</li>
      <li>&quot;회원사 서비스&quot;라 함은 &quot;회원사&quot;가 &quot;이용자&quot;에게 제공하는 모바일 어플리케이션, 웹사이트 등으로서 본 약관에 따른 &quot;솔루션&quot;의 대상이 되는 &quot;회원사&quot;의 서비스를 의미합니다.</li>
      <li>&quot;이용자&quot;라 함은 &quot;회원사 서비스&quot;를 실행이나 접속 등을 통하여 &quot;회원사&quot;가 제공하는 서비스를 이용하는 자를 의미합니다.</li>
      <li>&quot;광고 매체 파트너&quot;라 함은 &quot;솔루션&quot;을 통해 측정된 &quot;회원사&quot;의 광고 성과 데이터 확인을 위하여 &quot;회사&quot;로부터 &quot;포스트백&quot; 수신하도록 &quot;회원사&quot;와 &quot;회사&quot; 간에 사전 협의된 광고 매체 운영회사를 의미합니다.</li>
      <li>&quot;포스트백&quot;이라 함은 데이터 축적, 광고상품 운영 등을 위해 &quot;회원사&quot;가 스스로 결정한 규칙에 따라 &quot;데이터 연결 도구&quot;가 수집한 광고 성과 측정 관련 데이터를 &quot;회원사&quot;가 미리 지정한 &quot;광고 매체 파트너&quot; 등의 특정 위치로 전송하는 기능을 의미합니다.</li>
      <li>&quot;오디언스 싱크&quot;라 함은 &quot;회원사&quot;가 리타겟팅 광고를 진행을 위하여 &quot;솔루션&quot;을 통해 생성된 오디언스 데이터를 &quot;오디언스 파트너&quot;에 전송할 수 있도록 제공하는 &quot;솔루션&quot; 기능을 말합니다.</li>
      <li>&quot;오디언스 파트너&quot;란 함은 &quot;솔루션&quot;의 &quot;오디언스 싱크&quot;를 통해 오디언스 데이터를 전송 받기로 &quot;회사&quot;와 사전에 협의된 광고 매체를 의미합니다.</li>
      <li>&quot;세일즈 파트너&quot;라 함은 &quot;회사&quot;로부터 &quot;솔루션&quot;에 대한 판매 및 재판매 권한을 위임 받아 &quot;솔루션&quot;의 판매 또는 재판매를 수행하는 주체를 의미합니다.</li>
      <li>&quot;테크 파트너&quot;라 함은 &quot;솔루션&quot;의 특정 기능 제공과 관련하여 &quot;솔루션&quot;과 결합 또는 연계되는 외부 솔루션 제공 사업자를 의미합니다.</li>
      <li>&quot;메시지 발송기능&quot;이라 함은 &quot;회원사&quot;가 스스로 결정한 규칙과 내용에 따라 &quot;이용자&quot;에게 메시지를 발송하는 기능과 발송 도구를 의미합니다.</li>
      <li>&quot;부정 트래픽&quot;이라 함은 정당한 광고 성과 왜곡, 허위 광고 성과 도출 등을 위해 &quot;솔루션&quot;을 비정상적인 방법으로 사용하는 행위를 의미합니다.</li>
      <li>&quot;전송자격인증제&quot;란 전기통신사업법 제2조제14호나목의 특수한 유형의 부가통신역무를 제공하는 사업자가 영리 목적의 광고성 정보를 발송하는 경우 사전에 문자중계사 또는 인증업무를 위탁받은 운영기관이 심사를 통해 인증을 부여하는 제도를 말합니다.</li>
    </ol>

    {/* 제3조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 3 조 (약관의 게시와 개정)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 본 약관의 내용을 &quot;회원사&quot;가 명확하게 알 수 있도록 www.igaworks.com/term/dfinery 에 게시합니다.</li>
      <li>&quot;회사&quot;는 『약관의 규제에 관한 법률』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 &quot;정보통신망법&quot;)』 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
      <li>&quot;회사&quot;가 본 약관을 개정하고자 할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 7일 전에 공지합니다. 다만, &quot;회원사&quot;에게 불리하게 변경되거나 중요한 내용이 개정되는 경우에는 30일 전에 공지를 진행함과 동시에 일정기간 &quot;회원사&quot;가 가입시 등록한 전자우편주소, 로그인 시 동의창 등 1개 이상의 수단을 통해 &quot;회원사&quot;에게 명확하게 통지합니다.</li>
      <li>&quot;회사&quot;가 전항에 따라 개정약관을 공지 또는 통지하면서 &quot;회원사&quot;에게 공지 기간 내에 거부의 의사표시를 하지 않으면 약관 개정에 동의한 것으로 본다는 의미를 명확하게 통지하였음에도 &quot;회원사&quot;가 명시적으로 거부의 의사표시를 하지 아니하였을 경우에는 &quot;회원사&quot;가 개정약관에 동의한 것으로 봅니다.</li>
      <li>&quot;회원사&quot;가 개정약관의 적용에 동의하지 않는 경우, &quot;회사&quot;는 개정약관의 내용을 &quot;회원사&quot;에 적용할 수 없으며, 개정약관에 동의하지 않은 &quot;회원사&quot;는 개정약관의 적용을 받는 &quot;솔루션&quot; 이용이 제한될 수 있습니다. 개정약관의 적용이 불가피한 특별한 사정이 있는 경우 &quot;회사&quot;는 개정약관에 동의하지 않은 &quot;회원사&quot;와의 이용계약을 해지할 수 있습니다.</li>
      <li>본 약관에서 정하고 있는 사항에 관하여 &quot;회원사&quot;와 &quot;회사&quot;가 약관의 내용과 다른 내용을 기명날인한 서면의 방법으로 상호 합의한 경우에는 해당 서면 합의 사항이 본 약관보다 우선합니다.</li>
    </ol>

    {/* 제4조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 4 조 (약관의 해석)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 &quot;솔루션&quot;을 위하여 별도의 정책을 둘 수 있으며, 이를 &quot;회원사&quot;가 확인할 수 있도록 &quot;디파이너리 사이트&quot; 등에 게시합니다. &quot;회사&quot;가 게시한 정책 내용이 본 약관과 상충될 경우 해당 정책이 우선하여 적용됩니다.</li>
      <li>본 약관에서 정하지 아니한 사항이나 해석에 대해서는 전항의 정책, 관련 법령 또는 상관례에 따릅니다.</li>
    </ol>

    {/* 제5조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 5 조 (&quot;솔루션&quot; 이용계약 체결 등)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;솔루션&quot; 이용계약(이하 &quot;이용계약&quot;)은 &quot;회원사&quot;가 되고자 하는 자(이하 &quot;이용 신청자&quot;)가 본 약관의 내용에 대하여 동의를 한 다음 회원가입 및 &quot;솔루션&quot; 이용 신청을 하고 &quot;회사&quot;가 이 신청에 대하여 승낙함으로써 체결됩니다. 다만, &quot;회사&quot;와 &quot;이용 신청자&quot;가 별도 서면 계약을 체결하기로 하는 경우에는 &quot;회사&quot;와 &quot;회원사&quot;가 해당 계약 문서에 기명날인 함으로써 &quot;이용계약&quot;이 체결되며, 이 경우 &quot;회원사&quot;는 &quot;디파이너리 사이트&quot;에서 회원가입 및 &quot;이용약관&quot;에 대한 동의를 완료한 후에 &quot;솔루션&quot; 이용이 가능합니다.</li>
      <li>&quot;솔루션&quot; 이용 신청에 있어 &quot;회사&quot;는 전문기관을 통한 실명확인 혹인 본인인증을 요청할 수 있습니다.</li>
      <li>
        다만, &quot;회사&quot;는 &quot;이용 신청자&quot;가 아래 각 호의 하나에 해당하는 경우 해당 이용 신청을 승낙하지 않거나 사후에 &quot;이용계약&quot;을 해지할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&quot;회사&quot;가 과거 &quot;이용 신청자&quot;의 귀책사유를 이유로 &quot;이용 신청자&quot;의 &quot;솔루션&quot; 이용을 제한하였던 이력이 존재하는 경우. 단, 이후 &quot;회사&quot;가 &quot;이용 신청자&quot;의 &quot;솔루션&quot; 이용을 재승인한 경우에는 예외로 함.</li>
          <li>&quot;솔루션&quot; 이용 신청 시 사실이 아닌 내용이나 자료를 제공, 고지 또는 등록하거나 타인의 정보를 도용하는 경우</li>
          <li>위법, 불법행위 등 부정한 용도로 &quot;솔루션&quot;을 이용하고자 하는 경우</li>
          <li>&quot;이용 신청자&quot;의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하여 신청하는 경우</li>
        </ul>
      </li>
      <li>&quot;회사&quot;는 &quot;솔루션&quot; 관련 설비의 여유가 없거나 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.</li>
      <li>본 조에 따라 이용 신청의 승낙을 하지 아니하거나 유보한 경우, &quot;회사&quot;는 이를 &quot;이용 신청자&quot;에게 알립니다.</li>
      <li>&quot;솔루션&quot;의 기능 중 일부는 본 약관과는 별도의 서비스 약관 확인 및 동의를 &quot;디파이너리 사이트&quot;에서 완료한 이후에 활성화됩니다.</li>
      <li>&quot;회사&quot;는 &quot;전송자격인증제&quot;에 따른 인증(이하 '전송자격인증')을 받지 않거나, 인증이 취소된 사업자와는 거래를 하지 아니할 수 있습니다.</li>
    </ol>

    {/* 제6조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 6 조 (정보의 변경)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회원사&quot;는 &quot;계정&quot; 관리 화면을 통해 언제든지 &quot;회원사&quot;의 정보를 열람하고 수정할 수 있습니다. 단, &quot;회사&quot;가 수정을 불허하는 항목의 수정은 &quot;회사&quot;와 사전 협의 후 수정할 수 있습니다.</li>
      <li>&quot;회원사&quot;가 &quot;계정&quot;에 등록한 기재 사항이 변경되는 경우 &quot;회원사&quot;는 &quot;디파이너리 사이트&quot;에서 직접 수정을 해야 하며, &quot;회원사&quot;가 변경사항을 적절히 수정하지 않아 발생한 불이익에 대하여 &quot;회사&quot;는 책임을 부담하지 않습니다.</li>
    </ol>

    {/* 제7조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 7 조 (개인정보 보호 의무)</h3>
    <p className="text-body2 mb-3">
      &quot;회사&quot;는 &quot;솔루션&quot; 제공 및 기타 본 약관의 이행과 관련하여 『개인정보보호법』, 『정보통신망법』 등 관계법령을 준수합니다.
    </p>

    {/* 제8조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 8 조 (아이디 및 비밀번호 관리에 대한 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회원사&quot;가 &quot;디파이너리 사이트&quot;에 접속하기 위한 아이디(이메일)와 비밀번호에 관한 관리책임은 &quot;회원사&quot;에게 있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.</li>
      <li>&quot;회사&quot;는 &quot;회원사&quot;의 아이디, 비밀번호, 개인정보 등이 유출되었다고 판단되는 경우 해당 아이디를 통한 &quot;디파이너리 콘솔&quot; 접근을 제한할 수 있습니다.</li>
      <li>&quot;회원사&quot;는 아이디나 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 &quot;회사&quot;에 통지하고 &quot;회사&quot;의 안내에 따라야 하며, 전술한 통지의 의무를 이행하지 않거나 &quot;회사&quot;가 제공하는 안내를 따르지 않으므로 발생하는 모든 책임은 &quot;회원사&quot;가 부담합니다.</li>
      <li>&quot;회원사&quot;가 &quot;대행사&quot;에 &quot;솔루션&quot; 접근 및 이용에 관한 권한을 부여한 경우, 본 조에 따른 &quot;회원사&quot;의 의무와 책임은 &quot;대행사&quot;에 대하여도 동일하게 적용됩니다.</li>
    </ol>

    {/* 제9조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 9 조 (&quot;회원사&quot; 등에 대한 통지)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회원사&quot;에 대한 통지는 &quot;회사&quot;가 &quot;디파이너리 콘솔&quot;을 통해 고지하거나 &quot;회원사&quot;가 등록한 전자우편주소를 통해 통지합니다. &quot;회원사&quot;의 &quot;솔루션&quot; 관련 권리와 의무를 &quot;대행사&quot;가 &quot;회원사&quot;를 대신하여 수행하는 경우, &quot;대행사&quot;에 대한 본 항에 따른 통지는 &quot;회원사&quot;에도 전달된 것으로 간주합니다.</li>
      <li>&quot;회원사&quot; 전체에 대하여 통지하는 경우 &quot;회사&quot;는 7일 이상 &quot;디파이너리 사이트&quot;에 해당 내용을 게시함으로써 전항의 통지를 갈음할 수 있습니다.</li>
    </ol>

    {/* 제10조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 10 조 (&quot;회사&quot;의 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 관련 법령을 준수하며 본 약관이 금지하는 행위 및 선량한 풍속 기타 사회질서에 위반하는 행위를 하지 않으며, 계속적이고 안정적으로 &quot;솔루션&quot;을 제공하기 위해 최선의 노력을 다합니다.</li>
      <li>&quot;회사&quot;는 약관에서 정한 바에 따라 계속적이고 안정적인 서비스의 제공을 위하여 지속적으로 노력하며, 설비에 장애가 생기거나 멸실된 때에는 지체 없이 이를 수리 복구 합니다.</li>
      <li>&quot;회사&quot;는 &quot;솔루션&quot; 안정적인 운용을 위하여 필요한 인력 및 시스템을 구비합니다.</li>
      <li>&quot;회사&quot;는 서비스 이용과 관련하여 &quot;회원사&quot;로부터 제기된 의견이 정당하다고 인정될 경우 이를 처리하며, 해당 &quot;디파이너리 사이트&quot; 내 게시판이나 전자우편 등을 통하여 &quot;회원사&quot;에게 처리 과정 및 결과를 전달할 수 있습니다. 다만, 신속한 처리가 곤란한 경우는 &quot;회원사&quot;에 그 사유와 처리일정을 통보합니다.</li>
      <li>&quot;회사&quot;와 거래하는 문자재판매사업자가 &quot;전송자격인증&quot;이 인증이 취소된 사실을 알게되는 경우 &quot;회사&quot;는 서비스 정지, 계약 해지 등의 조치를 취할 수 있습니다.</li>
    </ol>

    {/* 제11조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 11 조 (&quot;회원사&quot;의 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>
        &quot;회원사&quot;는 아래 각 호 중 하나에 해당하는 행위를 하여서는 안됩니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&quot;회사&quot; 또는 기타 제3자의 지식재산권 등 권리를 침해하거나 명예를 손상시키는 행위</li>
          <li>&quot;회원사&quot;가 본 약관을 위반하거나 &quot;회사&quot;로부터 사전에 협의되지 않은 방법으로 &quot;솔루션&quot;을 이용하여 &quot;회사&quot;의 업무를 방해하는 행위</li>
          <li>&quot;솔루션&quot;의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하는 행위</li>
        </ul>
      </li>
      <li>
        &quot;회원사&quot;는 &quot;회원사 서비스&quot;가 다음 각 호 중 하나에 해당되지 않음을 보장하고 진술합니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&quot;회원사 서비스&quot;를 통해 제공되는 콘텐츠에 음란물, 폭력물, 도박, 사회적 공익 저해 등 사회 공공질서 및 선량한 풍속을 저해하는 내용이 포함되는 경우</li>
          <li>&quot;회원사 서비스&quot;가 제공되는 국가(지역의 정부 및 기타 관계 당국을 포함함)에서 불법으로 규정된 콘텐츠 혹은 기능을 제공하는 경우</li>
          <li>&quot;회원사 서비스&quot;를 통해서 발생하는 &quot;광고 매체 파트너&quot;의 광고 트래픽 중 일부 또는 전체 트래픽이 &quot;부정 트래픽&quot;으로 의심되는 경우. 단, &quot;회원사&quot;가 신청한 &quot;솔루션&quot; 기능이 &quot;부정 트래픽&quot;을 일부 허용하는 경우 허용되는 범위 내에서 발생하는 &quot;부정 트래픽&quot;은 제외함</li>
          <li>&quot;회원사 서비스&quot;를 통해서 정보통신설비의 오작동 또는 시스템 보유 정보 파괴를 유발시키는 컴퓨터 바이러스 프로그램 등이 유포되는 경우</li>
        </ul>
      </li>
      <li>&quot;회원사&quot;는 관련 법령, 본 약관, 디파이너리 헬프센터 내 도움말, &quot;솔루션&quot;과 관련하여 &quot;회사&quot;가 공지한 주의사항 및 통지사항 등을 준수해야 하며, 기타 &quot;회사&quot;의 업무에 방해되는 행위를 하여서는 안됩니다.</li>
      <li>&quot;회원사&quot; 또는 &quot;대행사&quot;가 &quot;솔루션&quot; 이용의 대가(이하 &quot;이용료&quot;) 지급을 15일 이상 연체하는 경우 &quot;회사&quot;는 &quot;회원사&quot;의 &quot;솔루션&quot; 이용을 제한할 수 있으며 이로 인한 책임은 &quot;회원사&quot;가 모두 부담합니다.</li>
      <li>&quot;회원사&quot;는 &quot;솔루션&quot; 이용과정에서 수집되거나 &quot;회원사&quot;가 &quot;회사&quot;에 제공하는 데이터에 대하여 관련 법령에 규정된 바에 따라 동의를 얻거나 필요한 사항을 고지해야 하며 필요한 보안조치를 취해야 합니다. 필요한 경우, &quot;회원사&quot;는 &quot;이용자&quot;의 디바이스로부터 수집하는 데이터에 대하여 &quot;이용자&quot;로부터 데이터 수집, 이용, 제3자 제공, 제3자 위수탁 등을 고지하고 명시적 동의를 받아야 하며, 관련 법령 등에 따라 보안조치를 취해야 합니다. &quot;회원사&quot;가 이와 관련된 적절한 조치 내지 절차를 취하지 않아 발생하는 일체의 책임은 &quot;회원사&quot;가 부담합니다. 명확히 하면, &quot;회사&quot;는 &quot;회원사&quot;의 &quot;솔루션&quot; 이용과 관련하여 관련 법령에 따라 &quot;회원사&quot;에게 요구되는 의무 이행에 관하여 어떠한 책임이나 의무도 부담하지 않습니다.</li>
      <li>유럽 개인정보 보호법(G.D.P.R) 발효 국가 혹은 지역을 대상으로 &quot;회원사 서비스&quot;를 제공하는 경우 &quot;회원사&quot;는 관련 법령 및 &quot;회사&quot;가 제공하는 'GDPR 설정' 연동 가이드를 이용하여 적절한 조치를 취해야 합니다. &quot;회원사&quot;가 이와 관련된 적절한 조치 내지 절차를 취하지 않아 발생하는 상황에 대한 일체의 책임은 &quot;회원사&quot;가 부담합니다.</li>
      <li>&quot;회원사&quot;는 &quot;회사&quot;의 명시적인 사전 서면 동의가 없는 한 &quot;솔루션&quot;의 이용권한, 기타 본 약관상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</li>
      <li>본 조 제7항의 규정에도 불구하고, &quot;회사&quot;로부터 사전 동의를 얻은 경우에 한하여 &quot;회원사&quot;는 &quot;대행사&quot;에게 &quot;솔루션&quot; 이용에 대한 권한을 부여하고 &quot;대행사&quot;가 &quot;이용료&quot; 지급 의무를 &quot;회원사&quot;를 대신하여 이행하도록 할 수 있습니다. 전술한 사항의 경우 &quot;회사&quot;와 &quot;대행사&quot;는 전술한 권한 수행 및 의무 이행에 관하여 별도 서면 약정을 체결하여야 하며, &quot;회사&quot;는 &quot;회원사&quot;의 &quot;솔루션&quot; 이용 신청에 관한 세부 사항을 &quot;대행사&quot;에게 공개 및 제공할 수 있습니다. 어떠한 경우에도 본 약관에 따른 &quot;회원사&quot;의 의무는 제한되거나 면제되지 아니합니다.</li>
    </ol>

    {/* 제 2 장 솔루션 이용 일반 */}
    <h2 className="text-heading3 mt-14 mb-6">제 2 장 &quot;솔루션&quot; 이용 일반</h2>

    {/* 제12조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 12 조 (&quot;솔루션&quot;의 제공)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 &quot;솔루션&quot;을 기술상 또는 업무상 지장이 없는 한 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
      <li>&quot;회사&quot;는 컴퓨터, 네트워크, &quot;회사&quot;가 이용하는 클라우드 서비스 등 정보통신설비의 정기적 또는 비정기적인 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 &quot;솔루션&quot;의 제공을 일시적으로 중단할 수 있습니다. 이 경우 &quot;회사&quot;는 &quot;솔루션&quot;의 제공이 중단되기 7일 전에 제9조에서 정한 방법으로 통지합니다. 다만, &quot;회사&quot;가 사전에 통지할 수 없는 부득이한 사유(국가 비상사태, 정전, 기간통신망 장애, 디스크 장애, 기반 시스템 장애 등)가 있는 경우 사후에 통지할 수 있습니다.</li>
    </ol>

    {/* 제13조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 13 조 (이용의 제한)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>본 약관 제12조 규정에도 불구하고 &quot;회원사&quot;가 제11조(&quot;회원사&quot;의 의무), 제15조(&quot;솔루션&quot;에 대한 권리) 및 제18조(&quot;메시지 발송기능&quot; 특약사항)에 명시된 의무를 위반하는 경우 &quot;회사&quot;는 &quot;회원사&quot;에 사전 통지 또는 고지 후 &quot;회원사&quot;에 제공되는 &quot;솔루션&quot; 기능의 일부 또는 전부를 제한할 수 있습니다. 단, 긴급하게 이용을 정지할 필요가 있다고 인정하는 경우 또는 &quot;회원사&quot;의 귀책사유로 통보가 불가능한 경우에는 사전통지 없이 &quot;솔루션&quot; 이용을 제한 또는 중단할 수 있습니다. 이 경우 &quot;회사&quot;는 가능한 시점에 해당 조치 내용, 조치 사유에 대하여 &quot;회원사&quot;에게 신속하게 통지 또는 고지합니다.</li>
      <li>본 약관 제11조 제8항에 따라 &quot;회원사&quot;가 &quot;대행사&quot;에게 &quot;솔루션&quot; 이용에 대한 권한을 부여 하거나 및/또는 &quot;대행사&quot;가 &quot;이용료&quot; 지급 의무를 &quot;회원사&quot;를 대신하여 이행하기로 한 경우에 있어서, &quot;대행사&quot;가 &quot;회사&quot;와 체결한 서면 약정을 위반하는 경우 &quot;회사&quot;는 &quot;회원사&quot;에 해당 위반 사실을 서면을 통지하고 서면 통지일로부터 15일 이내에 위반사실에 대한 시정이나 필요한 조치가 이행되지 않은 경우 &quot;회사&quot;는 &quot;회원사&quot;의 &quot;솔루션&quot; 이용을 제한할 수 있습니다.</li>
      <li>본 조 제1항 내지 제2항의 경우 &quot;회원사&quot;는 &quot;솔루션&quot; 이용이 제한된 날로부터 30일 이내에 &quot;솔루션&quot; 이용 제한에 해당하는 사실이 없음을 주장할 수 있으며, 상기 기한 내에 이러한 주장이 제기되지 않거나 위반 사실이 없음을 객관적인 사실이나 합리적인 근거를 토대로 입증하지 못하는 경우 &quot;이용계약&quot;은 해지될 수 있습니다.</li>
      <li>&quot;회사&quot;의 귀책사유가 없는 본 조에 따른 &quot;솔루션&quot; 이용 제한으로 인해 &quot;회원사&quot; 또는 기타 제3자에게 손해가 발생한 경우 &quot;회사&quot;는 이에 대해 책임을 지지 않습니다.</li>
    </ol>

    {/* 제14조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 14 조 (&quot;솔루션&quot;의 변경)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 관련 법령의 개폐, 정부의 규제, 회사의 사업구조 또는 서비스 정책의 변경, 운영상 또는 기술상 필요한 경우, 또는 기타 상당한 이유가 있는 경우에 &quot;솔루션&quot;의 전부 또는 일부를 변경할 수 있습니다. 이 경우 &quot;회사&quot;는 변경에 관한 사항을 변경 7일 이전(또는 변경된 내용이 &quot;회원사&quot;에게 불리하거나 중요한 내용인 경우에는 변경 30일 이전)에 &quot;회원사&quot;에 제9조에서 정한 방법으로 통지하며, &quot;회원사&quot;와 해당 변경 사항 적용 여부를 협의할 수 있습니다. 단, 변경 사항 적용이 법령 또는 정부의 규제 등에 의해서 요구되는 경우 &quot;회사&quot;는 사전 통지 없이 그 내용을 변경할 수 있습니다.</li>
      <li>&quot;솔루션&quot;의 제공기능, 이용방법, 이용요금 등에 대하여 변경이 있는 경우에는 변경사유와 내용을 그 변경 사항 적용 전에 제9조에서 정한 방법으로 통지 또는 고지합니다.</li>
      <li>&quot;회원사&quot;는 &quot;솔루션&quot;의 변경에 동의하지 않을 경우 &quot;이용계약&quot;을 해지할 수 있습니다.</li>
    </ol>

    {/* 제15조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 15 조 (&quot;솔루션&quot;에 대한 권리)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;데이터 연결 도구&quot; 및 &quot;디파이너리 사이트&quot; 내에서 제공되는 모든 소프트웨어, 기능, 문서, 콘텐츠, 브랜드의 표현 방식 등(이하 &quot;디파이너리 자산&quot;)에 관한 소유권, 지식재산권, 및 모든 권리 일체는 &quot;회사&quot;에 귀속됩니다. &quot;회사&quot;는 본 약관에 따른 &quot;솔루션&quot; 이용 범위에 한하여 &quot;회원사&quot;에 &quot;디파이너리 자산&quot;에 대한 이용권한을 부여하며, &quot;회원사&quot;는 본 약관에 따른 이용 목적 또는 &quot;디파이너리 사이트&quot;에 명시 혹은 공지된 목적에 맞게 &quot;솔루션&quot;을 이용합니다.</li>
      <li>&quot;솔루션&quot;에서 제공되는 정보, 데이터, 콘텐츠 등은 『저작권법』에 따라 보호되는 &quot;회사&quot;의 저작물이며, 해당 저작물에 대한 권리는 원칙적으로 회사에 있습니다. &quot;회원사&quot;는 본 약관에 따라 해당 저작물에 대한 이용 권한을 부여 받게 되며, 이용 시에는 &quot;회사&quot;의 데이터활용 가이드라인(https://www.igaworks.com/copyright)을 준수하여야 합니다.</li>
      <li>
        &quot;회원사&quot;가 다음 각 호에 해당하는 행위를 할 경우 &quot;회사&quot;는 사전 통지 없이 &quot;이용계약&quot;을 해지하거나, &quot;솔루션&quot; 이용을 제한할 수 있으며, 손해가 발생했을 경우 발생한 모든 손해에 대한 배상을 청구할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>본 조 제1항 또는 본 약관을 위반하여 &quot;디파이너리 자산&quot;을 사용하는 행위</li>
          <li>&quot;회사&quot;의 사전 동의 없이 &quot;디파이너리 자산&quot;을 복제, 수정 라이선스 재판매 또는 배포하는 행위</li>
          <li>&quot;디파이너리 자산&quot;과 관련하여 소스코드를 검출하거나 무단 복제 또는 개작, 파생물 제작, 역설계, 분해 또는 디컴파일 하는 등의 행위</li>
          <li>&quot;디파이너리 자산&quot;을 불법행위를 수행하기 위한 수단으로 사용한 경우</li>
          <li>&quot;디파이너리 자산&quot;을 이용하여 &quot;이용자&quot; 정보를 불법적으로 수집한 경우</li>
        </ul>
      </li>
    </ol>

    {/* 제16조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 16 조 (활용 데이터)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;솔루션&quot; 기능 제공을 목적으로 &quot;데이터 연결 도구&quot;가 &quot;회원사&quot;의 &quot;이용자&quot; 모바일 디바이스로부터 수집하는 데이터는 다음을 포함하나 다음 항목들로 한정되지 않습니다. 전술한 규정에도 불구하고 &quot;회사&quot;와 &quot;회원사&quot;는 별도 협의를 통하여 &quot;데이터 연결 도구&quot;를 통해서 수집하는 데이터의 항목을 개별적으로 정할 수 있습니다.
        <div className="border border-border p-3 mt-2 text-body2">
          광고식별값(ADID, IDFA), 플랫폼 정보(Android, iOS), 어트리뷰션 시 &quot;광고 매체 파트너&quot; 정보, IP주소, 이용 네트워크(3G, wifi), 디바이스 모델명/제조사명/해상도, 디바이스 통신사명, 디바이스 설정 언어/국가, 마켓 인스톨러 데이터
        </div>
      </li>
      <li>&quot;회사&quot;는 &quot;솔루션&quot;의 개선과 신규 기능 제공, &quot;회원사&quot; 대상 통계 데이터 제공 등의 목적으로 &quot;데이터 연결 도구&quot;를 통해 수집되거나 및 &quot;회원사&quot;의 &quot;솔루션&quot; 이용 과정에서 수집되는 데이터를 &quot;이용자&quot; 및 &quot;회원사 서비스&quot;를 특정할 수 없도록 처리하여 이용할 수 있습니다.</li>
      <li>&quot;솔루션&quot;을 통해 수집되거나 &quot;회원사&quot;가 제공하는 데이터의 보존기간은 &quot;회사&quot;의 개인정보처리방침에서 정한 기간까지 보유합니다.</li>
    </ol>

    {/* 제17조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 17 조 (&quot;솔루션&quot; 이용 지원)</h3>
    <p className="text-body2 mb-3">
      &quot;회원사&quot;가 &quot;솔루션&quot; 기능 이용 혹은 &quot;데이터 연결 도구&quot; 적용과 관련하여 전자우편, 유선, 구두 전달 등의 방법으로 지원을 요청했을 경우, &quot;회사&quot;는 요청 받은 사항을 지원하기 위해 &quot;회원사 서비스&quot; 정보가 등록된 &quot;디파이너리 콘솔&quot; 혹은 &quot;회원사 서비스&quot; 빌드 파일에 접근할 수 있으며 &quot;회원사&quot;는 &quot;이용계약&quot;을 체결함으로써 전술한 범위에 해당하는 권리를 &quot;회사&quot;에 부여한 것으로 간주합니다.
    </p>

    {/* 제18조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 18 조 (&quot;메시지 발송기능&quot; 특약사항)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;메시지 발송기능&quot;을 신청한 &quot;회원사&quot;(이하 제18조 내지 제18조의3에서 메시지 발신주체를 &quot;발신자&quot;라 합니다)가 메시지 발송 서비스를 제공하는 서비스사업자(이하 &quot;메시지 발송 사업자&quot;)의 서비스를 통해 &quot;이용자&quot;(이하 본조에서 메시지 수신주체를 &quot;수신자&quot;라 합니다)에게 메시지를 발송하는 경우, &quot;발신자&quot;와 &quot;회사&quot;는 개인정보 처리업무 위수탁 약정을 체결하여야 하고, &quot;발신자&quot;는 자신의 개인정보취급방침에 개인정보 위수탁 사실을 표시하는 등 『정보통신망법』 및 『개인정보보호법』 준수를 위한 제반 사항을 충분히 검토하고 적절한 조치를 적시에 취하여야 합니다.</li>
      <li>
        &quot;메시지 발송기능&quot;을 이용하고자 하는 &quot;발신자&quot;는 『정보통신망법』 제44조의 7(불법정보의 유통금지 등) 규정에 따라 다음 각 호에 해당하는 정보를 전송하여서는 안 됩니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>음란한 부호·문언·음향·화상 또는 영상을 배포·판매·임대하거나 공공연하게 전시하는 내용의 정보</li>
          <li>사람을 비방할 목적으로 공공연하게 사실이나 거짓의 사실을 드러내어 타인의 명예를 훼손하는 내용의 정보</li>
          <li>공포심이나 불안감을 유발하는 부호·문언·음향·화상 또는 영상을 반복적으로 상대방에게 도달하도록 하는 내용의 정보</li>
          <li>정당한 사유 없이 정보통신시스템, 데이터 또는 프로그램 등을 훼손·멸실·변경·위조하거나 그 운용을 방해하는 내용의 정보</li>
          <li>『청소년보호법』에 따른 청소년유해매체물로서 상대방의 연령 확인, 표시의무 등 법령에 따른 의무를 이행하지 아니하고 영리를 목적으로 제공하는 내용의 정보</li>
          <li>법령에 따라 금지되는 사행 행위에 해당하는 내용의 정보</li>
          <li>법령에 따라 분류된 비밀 등 국가기밀을 누설하는 내용의 정보</li>
          <li>『국가보안법』에서 금지하는 행위를 수행하는 내용의 정보</li>
          <li>그 밖에 범죄를 목적으로 하거나 교사(敎唆) 또는 방조하는 내용의 정보</li>
        </ul>
      </li>
      <li>&quot;발신자&quot;는 불법적인 방법으로 확보한 전화번호를 대상으로 메시지 발송을 시도하지 않아야 하며, 불법 스팸 및 스미싱 메시지 전송, 동일 내용의 중복 전송 및 기타 &quot;솔루션&quot; 및 &quot;메시지 발송 사업자&quot;의 서비스 운영에 현저한 지장을 초래할 수 있는 행위를 하지 않아야 합니다.</li>
      <li>&quot;회사&quot;가 발신번호가 변작된 문자메시지 발송 사실을 인지하거나 과학기술정보통신부 장관 또는 한국인터넷진흥원의 요청이 있는 경우 &quot;회사&quot;는 &quot;발신자&quot;의 &quot;메시지 발송기능&quot; 이용을 영구정지 하거나 또는 3개월 동안 일시 중지 할 수 있습니다.</li>
      <li>&quot;발신자&quot;가 발송하는 메시지가 『정보통신망법』 제50조에 따른 영리목적의 광고성 정보에 해당하는 경우, 동법 시행령 제61조 제3항에 따른 '영리목적의 광고성 정보의 명시사항 및 명시방법'을 준수하여 메시지를 작성해야 합니다.</li>
      <li>&quot;발신자&quot;는 i) &quot;발신자&quot; 또는 &quot;회원사 서비스&quot;를 규제하는 관계 법령상의 광고/홍보 관련 규정을 준수하여야 하며, ii) &quot;발신자&quot;의 메시지가 타인의 상표, 저작권 및 기타 지식재산권을 침해하는 내용을 포함하지 않도록 하여야 하고, iii) 관계 법령에서 금지/제한하는 불법적인 내용을 포함하지 않도록 하여야 하며, iv) 사회상규 기타 선량한 풍속에 위배되는 내용을 포함하지 않도록 해야 합니다.</li>
      <li>&quot;발신자&quot;가 본 조의 규정을 위반하는 경우 &quot;회사&quot;는 사전 통지 없이 본 조에 따른 &quot;메시지 발송 기능&quot; 제공을 제한하거나 중단할 수 있으며, 이 경우 &quot;발신자&quot;는 해당 위반 행위로 인한 일체의 책임으로부터 &quot;회사&quot;를 면책하고, &quot;회사&quot;가 입은 손해를 배상해야 합니다.</li>
      <li>&quot;메시지 발송 기능&quot; 이용에 따른 별도 비용(SMS/LMS/MMS 및 카카오메시지 발송 관련) 발생 시, 해당 비용 산정 기준 및 세부 사항은 &quot;메시지 발송 사업자&quot;가 정한 요금 정책에 따르며, &quot;메시지 발송 사업자&quot;가 해당 정책을 변경하는 경우 &quot;회사&quot;는 이를 &quot;발신자&quot;에 알리고 &quot;메시지 발송 사업자&quot;가 변경한 기준에 따라 요금을 청구합니다.</li>
      <li>&quot;회사&quot;와 거래하는 문자재판매사업자는 &quot;전송자격인증&quot;을 받고 전송자격인증제 운영규정을 준수해야 합니다.</li>
    </ol>

    {/* 제18조의2 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 18 조의 2 (&quot;메시지 발송기능&quot; 이용을 위한 인증 절차)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 &quot;발신자&quot;의 &quot;메시지 발송기능&quot; 이용 시 타인의 명의를 도용한 부정 이용을 방지하기 위해 본인인증서비스 사업자가 제공하는 인증방법을 통해 본인인증서비스 절차를 수행 할 수 있으며, 이 경우 &quot;발신자&quot;는 &quot;회사&quot;가 제공하는 인증 방법으로 인증을 거친 후 해당 기능을 이용할 수 있습니다.</li>
      <li>&quot;회사&quot;는 발신번호의 변작 방지를 위해 번호 인증을 통한 발신번호 사전 등록 서비스를 제공‧운영 할 수 있으며, &quot;발신자&quot;는 『전기통신사업법』 제84조의 2(전화번호의 거짓표시 금지 및 이용자 보호)에 따라 발신번호 사전 등록 후 등록된 번호로만 메시지를 발송하여야 합니다.</li>
      <li>&quot;발신자&quot;가 정당하지 않은 방법으로 전화번호를 변경하여 발신하는 경우, 관련 법규에 따라 과태료가 부과될 수 있습니다.</li>
    </ol>

    {/* 제18조의3 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 18조의 3 (&quot;메시지 발송기능&quot; 장애 관련 처리 절차 및 처리 기간)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>
        &quot;메시지 발송기능&quot; 이용 상에 장애가 발생하는 경우 그에 대한 처리 절차는 다음과 같습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&quot;메시지 발송기능&quot;의 장애 또는 기타 해당 기능 이용에 불편이 있는 경우, &quot;발신자&quot;는 이에 대하여 이메일로 &quot;회사&quot;에 통지할 수 있으며, &quot;회사&quot;는 &quot;발신자&quot;로부터 해당 통지를 수령한 때로부터 48시간 이내에 서면 회신, 장애 복구 등 필요한 조치를 이행합니다.</li>
          <li>
            이용 상의 장애 또는 불편 사항에 대한 &quot;회사&quot;의 구체적인 대응 및 처리 절차 등은 다음에 명시된 바에 따르거나 이에 준하여 처리 됩니다.
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-3 py-2 text-left">형태</th>
                    <th className="border border-border px-3 py-2 text-left">유형</th>
                    <th className="border border-border px-3 py-2 text-left">원인</th>
                    <th className="border border-border px-3 py-2 text-left">처리 절차</th>
                    <th className="border border-border px-3 py-2 text-left">처리 기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2" rowSpan={4}>서비스 관련</td>
                    <td className="border border-border px-3 py-2" rowSpan={2}>통신 장애</td>
                    <td className="border border-border px-3 py-2">회사 귀책</td>
                    <td className="border border-border px-3 py-2">원인 확인 및 복구</td>
                    <td className="border border-border px-3 py-2">3 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">제3자 귀책</td>
                    <td className="border border-border px-3 py-2">원인 확인 및 복구 시점 안내</td>
                    <td className="border border-border px-3 py-2">7 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2" rowSpan={2}>시스템 장애</td>
                    <td className="border border-border px-3 py-2">회사 귀책</td>
                    <td className="border border-border px-3 py-2">원인 확인 및 복구</td>
                    <td className="border border-border px-3 py-2">3 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">제 3자 귀책</td>
                    <td className="border border-border px-3 py-2">원인 확인 및 복구 계획 통지</td>
                    <td className="border border-border px-3 py-2">7 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2" rowSpan={2}>요금 관련</td>
                    <td className="border border-border px-3 py-2" rowSpan={2}>청구요금 이의제기</td>
                    <td className="border border-border px-3 py-2">회사 귀책</td>
                    <td className="border border-border px-3 py-2">과오금 여부 판단 및 통지</td>
                    <td className="border border-border px-3 py-2">7 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">회원사 귀책</td>
                    <td className="border border-border px-3 py-2"></td>
                    <td className="border border-border px-3 py-2">7 영업일</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">기타</td>
                    <td className="border border-border px-3 py-2">기타 이의제기</td>
                    <td className="border border-border px-3 py-2">회사/회원사 귀책</td>
                    <td className="border border-border px-3 py-2">내용 확인 및 필요 조치 이행</td>
                    <td className="border border-border px-3 py-2">7 영업일</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </li>
      <li>천재지변, 전쟁, 화재, 테러, 홍수, 지진, 디도스(DDOS) 공격, IDC 장애, 기간통신사업자의 회선 장애, 클라우드 사업자의 서비스 장애, 해킹 등의 사유로 &quot;메시지 발송기능&quot; 제공이 불가능 한 경우 &quot;메시지 발송 기능&quot;은 중단 될 수 있으며, 이 경우 &quot;회사&quot;는 해당 기능 제공 중단 사유 발생 즉시(또는 즉시 안내가 불가능 한 때에는 안내가 가능한 때) &quot;발신자&quot;에게 안내하며, 해당 기능 제공 재개를 위해 필요한 조치를 이행합니다.</li>
      <li>&quot;회사&quot;가 &quot;메시지 발송기능&quot;의 일부 또는 전부를 변경 또는 중단하는 경우, &quot;회사&quot;는 그 변경 또는 중단 예정일 30일 전까지 제9조에서 정한 방법으로 &quot;발신자&quot;에게 통지합니다.</li>
    </ol>

    {/* 제19조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 19조 (서비스 운영 정책)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;솔루션&quot; 이용 신청 시 &quot;회원사&quot;가 약정한 서비스 상품(이하 &quot;서비스플랜&quot;)의 최소 이용단위는 1개월(1일 ~ 말일)이며, 월 중간에 &quot;솔루션&quot; 이용이 개시되더라도 말일까지 사용분에 대하여 1개월 분의 요금이 청구됩니다. 단, 최초 이용 시작일이 해당 월 20일 이후인 경우 이용기간은 익월 말일까지로 하며, 이 경우 최초 이용시작월의 &quot;이용료&quot;는 익월 말일까지의 사용량을 모두 포함합니다. 전술한 본 항 단서의 경우(이용 개시가 20일 이후인 경우)를 제외하고, &quot;서비스플랜&quot;에 포함된 월 제공량(MAU와 이벤트 또는 Point)은 이월되지 않고 소멸됩니다.</li>
      <li>
        &quot;회원사 서비스&quot; 앱마켓 출시 지연 또는 웹사이트 오픈 지연 등으로 &quot;솔루션&quot; 이용 시작일이 지연되는 경우 다음 각 호에 정한 바에 &quot;솔루션&quot; 이용기간이 자동 변경 됩니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>월간 계약 시 : 이용기간은 실제 &quot;솔루션&quot; 이용시작일로부터 익월 말일까지로 합니다.</li>
          <li>연간 계약 시 : 이용기간은 실제 &quot;솔루션&quot; 이용시작일로부터 익년 이용시작월의 말일까지로 합니다.</li>
        </ul>
      </li>
      <li>&quot;회원사&quot;는 &quot;회사&quot;와의 개별 협의를 통해 서비스 기능 및 서비스 플랜 등을 월단위로 변경(추가/삭제)할 수 있으며, &quot;회원사&quot;가 변경한 서비스 세부 사항은 익월 1일부터 적용됩니다.</li>
      <li>&quot;회원사&quot;에 청구되는 &quot;이용료&quot;는 ① 회원사가 선택한 서비스 플랜에 따라 매월 고정적으로 청구되는 월 기본이용료, ② 서비스 플랜의 약정 제공량을 초과하여 부과되는 추가요금, 그리고 ③ 회원사가 신청한 부가서비스(nCPI/A, CRM 메시지 발송 등)에 부과되는 별도 비용으로 구성됩니다.</li>
      <li>&quot;이용료&quot; 지급이 지연되는 경우 &quot;회사&quot;는 미납된 &quot;이용료&quot;에 월 1%의 연체료를 가산하여 &quot;회원사&quot;에 청구합니다.</li>
      <li>MAU, Traffic은 APP(Android, iOS)의 경우 광고ID를 기준으로, WEB의 경우 쿠키(COOKIE) 값을 기준으로 산정되며, 사용되지 않은 약정 MAU, Traffic은 이월되지 않고 소멸됩니다.</li>
    </ol>

    {/* 제20조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 20 조 (&quot;솔루션&quot; 장애에 따른 손해배상)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회사&quot;는 &quot;회원사&quot;로부터 &quot;솔루션&quot;을 이용하지 못한 사실을 접수한 때 또는 &quot;회사&quot;가 해당 사실을 스스로 인지한 때부터 &quot;솔루션&quot; 이용 재개를 위한 가능한 조치를 취하며, &quot;솔루션&quot;을 다시 이용할 수 있게 된 경우 이 사실을 &quot;회원사&quot;에 통지합니다.</li>
      <li>&quot;회사&quot;의 책임 있는 사유로 &quot;회원사&quot;가 &quot;솔루션&quot;을 이용하지 못한 경우 &quot;회사&quot;는 본조에서 정하고 있는 바에 따라 배상책임을 부담합니다.</li>
      <li>
        &quot;회사&quot;는 &quot;솔루션&quot;의 월간 가동 시간 비율[해당월의 총 시간(분)에서 해당월에 발생한 중단시간(분)을 뺀 후 해당 월의 총 시간(분)으로 나눈 값을 백분율로 나타낸 값, 이하 동일]을 기준으로 다음과 같이 보상합니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>월간 가동 시간 비율이 99.5% 미만 ~ 99% 이상인 경우 : 중단이 발생한 월 이용 금액의 5%</li>
          <li>월간 가동 시간 비율이 99% 미만 ~ 95% 이상인 경우 : 중단이 발생한 월 이용 금액의 15%</li>
          <li>월간 가동 시간 비율이 95% 미만인 경우 : 중단이 발생한 월 이용 금액의 25%</li>
        </ul>
      </li>
      <li>&quot;회원사&quot;는 본 조에 따른 보상의 청구를 위해, 청구사유, 청구금액 및 산출근거를 기재하여 &quot;솔루션&quot; 중단이 발생한 시점으로부터 3개월 이내에 &quot;디파이너리 사이트&quot; 내 접수처를 통해 청구해야 하며, 해당 기한 내에 보상을 청구하지 않아 &quot;솔루션&quot; 중단 경위나 원인, 중단시간 등을 확인이 어려운 경우 해당 청구 건에 대한 보상이 제한될 수 있습니다.</li>
    </ol>

    {/* 제21조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 21 조 (면책 및 책임제한)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>
        본 약관 제20조의 규정에도 불구하고 &quot;회사&quot;는 &quot;회사&quot;의 고의 또는 과실 없이 발생한 다음 각 호의 경우에 대해서는 책임을 부담하지 않습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&quot;회사&quot;가 천재지변, 전쟁, 내란, 폭동, 화재, 테러, 홍수, 지진, 폭풍, 정부의 규제, 관련 법령의 개폐, 디도스(DDOS) 공격, IDC 장애, 기간통신사업자의 회선 장애, 클라우드 사업자의 서비스 장애, 해킹, 전염병의 창궐 및 기타 이에 준하는 불가항력 등의 &quot;회사&quot;가 통제할 수 없는 사유로 인하여 &quot;솔루션&quot;을 제공할 수 없는 경우</li>
          <li>&quot;회원사&quot;의 귀책사유로 &quot;솔루션&quot; 이용에 장애가 발생하거나 &quot;회원사&quot;가 소유 또는 관리하는 장비의 장애(&quot;회사&quot;의 통제범위에 속하지 않는 문제)로 인해 &quot;솔루션&quot; 중단이 발생하는 경우</li>
          <li>&quot;테크 파트너&quot; 및 &quot;오디언스 파트너&quot; 등 제3자가 제공하는 서비스와 연계되어 제공되는 &quot;솔루션&quot; 일부 기능의 경우, &quot;회사&quot;의 책임 없는 사유로 해당 기능이 원활히 작동하지 못한 경우</li>
          <li>&quot;회원사&quot;가 지정한 &quot;포스트백&quot; 데이터 또는 오디언스 타겟팅 데이터의 최종 수신 주체가 데이터를 수집, 가공, 처리, 이용하는 것과 관련하여 분쟁이 발생하는 경우</li>
          <li>단순 &quot;디파이너리 콘솔&quot; 접속 오류에 해당하는 경우</li>
          <li>'beta' 및 '무료 데모'가 표시된 기능이 중단된 경우</li>
        </ul>
      </li>
      <li>&quot;회사&quot;는 &quot;회원사&quot;가 &quot;솔루션&quot;을 이용하여 기대하는 수익 및 효과를 얻지 못하거나 상실한 것에 대하여 책임을 지지 않으며, &quot;회사&quot;는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해 및/또는 징벌적 손해에 대한 책임을 부담하지 않습니다.</li>
      <li>&quot;회사&quot;의 고의 또는 과실이 없는 한 &quot;회사&quot;는 &quot;회원사&quot; 상호 간 또는 &quot;회원사&quot;와 제3자(&quot;대행사&quot;, &quot;이용자&quot;, &quot;광고 매체 파트너&quot;, &quot;오디언스 파트너&quot;, &quot;테크 파트너&quot;, 및 &quot;세일즈 파트너&quot;를 포함하되 이에 국한되지 아니한다) 상호 간에 &quot;솔루션&quot;을 매개로 또는 &quot;솔루션&quot;과 관련하여 발생한 분쟁에 대해서는 개입할 의무가 없으며 이로 인한 손해를 배상할 책임이 없습니다.</li>
      <li>본 약관에 따른 &quot;회사&quot;의 &quot;회원사&quot;에 대한 배상책임 총 한도는 &quot;회원사&quot;의 손해 발생 시점 직전 6개월 간 &quot;회원사&quot;가 &quot;회사&quot;에 지급한 &quot;이용료&quot; 총액을 초과하지 아니합니다.</li>
    </ol>

    {/* 제22조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 22 조 (솔루션 이용계약 해지)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&quot;회원사&quot;는 &quot;디파이너리 콘솔&quot; 혹은 &quot;회사&quot;에 직접 연락하여 &quot;솔루션&quot; 이용 신청을 해지할 수 있습니다.</li>
      <li>본 조 제1항에 따라 &quot;솔루션&quot; 이용 신청이 해지되는 경우 &quot;솔루션&quot;을 통해 제공되는 모든 기능은 중단됩니다. 기능이 정지되면 &quot;회원사&quot;는 이용이 정지된 기능과 그 기능을 구성하는 원천 데이터에 접근할 수 없습니다. 필요할 경우 &quot;회원사&quot;는 이용해지 전 필요한 데이터를 스스로 백업해야 하며, 백업하지 않아 발생한 문제에 대해 &quot;회사&quot;는 책임을 부담하지 않습니다.</li>
      <li>
        다음 각 호의 어느 하나에 해당하는 사유가 발생하는 경우 당사자 일방은 상대방에게 서면으로 통지하여 &quot;이용계약&quot;을 해지할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>상대방이 영업취소 또는 제3자로부터 가압류, 가처분 등 기타 강제집행을 받거나, 해산결의를 하는 등의 사유로 인해 &quot;이용계약&quot;의 원활한 이행이 불가능하다고 판단될 경우</li>
          <li>상대방에 대하여 파산, 기업회생절차개시 신청이 있었거나 스스로 신청을 하였을 경우</li>
          <li>상대방이 발행, 배서, 보증한 유가증권 등이 부도나는 등 그 신용에 위험이 있을 경우</li>
          <li>제13조 제3항에 명시된 사유가 있는 경우</li>
        </ul>
      </li>
      <li>&quot;회원사&quot;의 책임 있는 사유로 약정하였던 이용 기간 만료 전에 계약이 해지하는 경우 &quot;회원사&quot;에게 제공되었던 연간계약 프로모션 할인혜택은 위약금으로 청구됩니다.</li>
      <li>이용 신청이 해지되는 경우, 정산이 완료되지 않은 &quot;이용료&quot; 및 위약금(해당되는 경우)은 해지일로부터 10일 이내에 지급되어야 합니다.</li>
    </ol>

    {/* 제 3 장 기타 */}
    <h2 className="text-heading3 mt-14 mb-6">제 3 장 기타</h2>

    {/* 제23조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 23 조 (관할법원)</h3>
    <p className="text-body2 mb-3">
      &quot;솔루션&quot; 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 상호 협의에 의하여 해결하되, 합의가 이루어지지 않아 분쟁이 발생하는 경우 서울중앙지방법원을 전속적 합의 관할로 합니다.
    </p>

    {/* 부칙 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">[부칙]</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>본 약관은 2025년 01월 20일부터 적용됩니다.</li>
      <li>종전까지 시행 중이던 약관은 본 약관으로 대체한다.</li>
    </ol>

    {/* 이전 약관 보기 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">[이전 약관 보기]</h3>
    <ul className="list-disc pl-5 space-y-1 text-body2 mb-4">
      <li>시행일자: 2023.06.01 ~ 2025.01.19 <a href="/term/dfinery/230601" className="text-primary underline">(클릭)</a></li>
      <li>시행일자: 2021.09.01 ~ 2023.05.31 <a href="/term/dfinery/230531" className="text-primary underline">(클릭)</a></li>
      <li>시행일자: 2021.04.23 ~ 2021.08.31 <a href="/term/dfinery/210831" className="text-primary underline">(클릭)</a></li>
    </ul>
  </>
);
