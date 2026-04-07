export const Dfinery230531 = () => (
  <>
    <h2 className="text-heading3 mb-6">DFINERY 이용약관</h2>

    {/* 제 1 장 총칙 */}
    <h2 className="text-heading3 mt-14 mb-6">제 1 장 총칙</h2>

    {/* 제1조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 1 조 (목적)</h3>
    <p className="text-body2 mb-3">
      본 약관은 주식회사 아이지에이웍스(이하 &apos;회사&apos;)가 제공하는 디파이너리 서비스(이하 &apos;디파이너리&apos;)의 이용과 관련하여 &apos;회사&apos;와 &apos;회원사&apos; 간 권리와 의무 및 기타 필요한 사항을 규정하는데 그 목적이 있습니다.
    </p>

    {/* 제2조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 2 조 (용어의 정의)</h3>
    <p className="text-body2 mb-3">
      본 약관에서 사용하는 용어의 정의는 아래와 같습니다.
    </p>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;디파이너리&apos;라 함은 &apos;회사&apos;가 &apos;회원사&apos;에게 제공하는 데이터 저장 기능, 데이터 분석 기능, 데이터기반 응용 기능, 메시지 발송기능, 포스트백 기능, 광고 성과 측정 기능, 부정 트래픽 방지 기능 등 관련 제반 서비스를 의미합니다.</li>
      <li>&apos;디파이너리 SDK&apos;라 함은 &apos;디파이너리&apos;가&apos; &apos;회원사&apos; 서비스에서 기능할 수 있도록 제공되는 소프트웨어 개발 도구를 의미합니다.</li>
      <li>&apos;디파이너리 사이트&apos;라 함은 &apos;디파이너리&apos; 제공 및 이용을 위해 &apos;회사&apos;가 운영하는 웹사이트(console.dfinery.io, dfinery.io, help.dfienry.io)를 의미합니다.</li>
      <li>&apos;디파이너리 콘솔&apos;(console.dfinery.io)이라 함은 &apos;디파이너리&apos; 솔루션이 제공 및 관리되는 사이트를 의미합니다.</li>
      <li>&apos;회원사&apos;라 함은 &apos;디파이너리 콘솔&apos;에 접속하여 본 계약에 따라 &apos;회사&apos;와 이용계약을 체결하고 자신의 서비스와 관련하여 &apos;디파이너리&apos; 솔루션을 제공받는 주체를 의미합니다.</li>
      <li>&apos;계정&apos;이라 함은 &apos;디파이너리 콘솔&apos;에서 &apos;회원사&apos;의 서비스가 관리되는 단위를 의미합니다.</li>
      <li>&apos;구성원&apos;이라 함은 &apos;회원사&apos;로부터 &apos;디파이너리 콘솔&apos; 접속 권한 및 &apos;디파이너리&apos; 이용권한을 부여받아 &apos;회원사&apos;의 관리하에 &apos;디파이너리&apos;를 이용하는 자를 의미하며, &apos;회원사&apos;로부터 부여받은 권한에 따라 &apos;관리자&apos;(admin) 및 &apos;일반 구성원&apos;으로 구분됩니다.</li>
      <li>&apos;관리자&apos;(admin)라 함은 &apos;디파이너리&apos; 이용계약을 신청, 체결, 해지할 수 있는 &apos;회원사&apos; 본인 또는 &apos;회원사&apos;를 대표, 대리하는 &apos;구성원&apos;으로서, &apos;계정&apos;을 직접 생성하거나 &apos;관리자&apos;로부터 &apos;계정&apos;에 &apos;관리자&apos; 역할로 초대된 &apos;구성원&apos;을 의미하며, &apos;디파이너리&apos;의 모든 관리 기능을 이용할 수 있고 &apos;구성원&apos;을 &apos;계정&apos;에 초대하여 정의된 역할을 부여할 수 있습니다.</li>
      <li>&apos;최종 이용자&apos;라 함은 &apos;회원사&apos;가 제공하는 서비스를 실행, 접속하여 필요한 기능을 이용하는 개인 혹은 단체를 의미합니다.</li>
      <li>&apos;광고 매체 파트너사&apos;라 함은 &apos;디파이너리&apos;를 통하여 광고 성과를 측정할 수 있도록 허용하거나, &apos;디파이너리&apos;로부터 &apos;포스트백&apos; 데이터를 수신할 수 있도록 협의된 광고매체 운영 회사를 의미합니다.</li>
      <li>&apos;세일즈 파트너사&apos;라 함은 &apos;회사&apos;로부터 &apos;디파이너리&apos;에 대한 판매 및 재판매 권한을 위임받아 수행할 수 있는 주체를 의미합니다.</li>
      <li>&apos;테크 파트너사&apos;라고 함은 &apos;디파이너리&apos;와 다른 솔루션을 결합하여 제공할 수 있도록 &apos;회사&apos;로부터 허락을 받은 솔루션 개발사나 솔루션 제공사를 의미합니다.</li>
      <li>&apos;포스트백&apos;이라 함은 데이터 축적, 광고상품 운영 등을 위해 &apos;회원사&apos; 또는 &apos;구성원&apos;이 스스로 결정한 규칙에 따라 &apos;디파이너리 SDK&apos;가 수집한 데이터를 &apos;회원사&apos; 또는 &apos;구성원&apos;이 미리 지정한 특정 위치로 전송하는 기능을 의미합니다.</li>
      <li>&apos;메시지 발송기능&apos;이라 함은 &apos;회원사&apos; 또는 &apos;구성원&apos;이 스스로 결정한 규칙과 내용에 따라 &apos;최종 이용자&apos;에게 메시지를 발송하는 기능과 발송 도구를 의미합니다.</li>
      <li>&apos;무료 플랜&apos;이라 함은 &apos;회사&apos;에 별도의 비용을 지급하지 않고 무상으로 &apos;디파이너리&apos;의 서비스를 이용하는 것을 의미합니다.</li>
      <li>&apos;유료 플랜&apos;이라 함은 &apos;디파이너리&apos;를 이용하는데 있어 &apos;회사&apos;에 별도의 비용을 지급하고 사용하는 것을 의미합니다.</li>
      <li>&apos;부정 트래픽&apos;이라 함은 정당한 광고 성과 왜곡, 허위 광고 성과 도출 등을 위해 &apos;디파이너리&apos;를 비정상적인 방법으로 사용하는 행위를 의미합니다.</li>
    </ol>

    {/* 제3조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 3 조 (약관의 게시와 개정)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 본 약관의 내용을 &apos;회원사&apos;가 명확하게 알 수 있도록 &apos;디파이너리 사이트&apos;에 게시합니다.</li>
      <li>&apos;회사&apos;는 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
      <li>&apos;회사&apos;가 본 약관을 개정하고자 할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 7일 전부터 적용일자 전까지 공지합니다. 다만, &apos;회원사&apos;에게 불리하게 변경되거나 중요한 내용이 개정되는 경우에는 30일 전부터 공지를 진행함과 동시에 일정기간 &apos;회원사&apos;가 가입시 등록한 전자우편주소, 로그인 시 동의창 등 1개 이상의 수단을 통해 &apos;회원사&apos;에게 명확하게 통지합니다.</li>
      <li>&apos;회사&apos;가 전항에 따라 개정약관을 공지 또는 통지하면서 &apos;회원사&apos;에게 공지 기간 내에 거부의 의사표시를 하지 않으면 약관 개정에 동의한 것으로 본다는 의미를 명확하게 통지하였음에도 &apos;회원사&apos;가 명시적으로 거부의 의사표시를 하지 아니하였을 경우에는 &apos;회원사&apos;가 개정약관에 동의한 것으로 봅니다.</li>
      <li>&apos;회원사&apos;가 개정약관의 적용에 동의하지 않는 경우, &apos;회사&apos;는 개정약관의 내용을 &apos;회원사&apos;에 적용할 수 없으며, 개정약관에 동의하지 않는 &apos;회원사&apos;는 개정약관의 적용을 받는 서비스 이용이 제한될 수 있습니다. 개정약관의 적용이 불가피 한 특별한 사정이 있는 경우 &apos;회사&apos;는 개정약관에 동의하지 않는 &apos;회원사&apos;와의 이용계약을 해지할 수 있습니다.</li>
      <li>&apos;회원사&apos;와 &apos;회사&apos;가 약관에서 정하고 있는 사항에 관하여 약관의 내용과 다르게 합의한 사항이 있을 때에는 그 합의 사항이 약관보다 우선합니다.</li>
    </ol>

    {/* 제4조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 4 조 (약관의 해석)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 &apos;디파이너리&apos;를 위하여 별도의 정책을 둘 수 있으며, 이를 &apos;회원사&apos; 및 &apos;구성원&apos;이 확인할 수 있도록 &apos;디파이너리 사이트&apos; 등에 게시합니다. &apos;회사&apos;가 게시한 정책 내용이 이 약관과 상충될 경우 별도의 정책이 우선하여 적용됩니다.</li>
      <li>본 약관에서 정하지 아니한 사항이나 해석에 대해서는 전항의 정책, 관련 법령 또는 상관례에 따릅니다.</li>
    </ol>

    {/* 제5조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 5 조 (&apos;디파이너리&apos; 이용계약 체결 등)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;디파이너리&apos; 이용계약은 &apos;회원사&apos; 또는 &apos;구성원&apos;이 되고자 하는 자(이하 &apos;이용 신청자&apos;)가 본 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 &apos;회사&apos;가 이 신청에 대하여 승낙함으로써 체결됩니다.</li>
      <li>이용 신청에 있어 &apos;회사&apos;는 전문기관을 통한 실명확인 혹인 본인인증을 요청할 수 있습니다.</li>
      <li>다만, &apos;회사&apos;는 아래 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>이용 신청자&apos;가 본 약관에 의하여 이전에 &apos;회원사&apos; 또는 &apos;구성원&apos;의 자격을 상실한 적이 있는 경우. 단, &apos;회원사&apos;가 또는 &apos;구성원&apos;이 &apos;회사&apos;로부터 재가입 승낙을 얻은 경우에는 예외로 함.</li>
          <li>&apos;회원사&apos; 또는 &apos;구성원&apos;이 이용 신청 시 허위 정보를 입력하거나 &apos;회사&apos;가 요구한 정보를 기재하지 않은 경우</li>
          <li>&apos;구성원&apos; 이 &apos;회원사&apos;의 소속이 아닐 경우</li>
          <li>위법, 불법행위 등 부정한 용도로 &apos;디파이너리&apos;를 이용하고자 하는 경우</li>
          <li>&apos;이용 신청자&apos;의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하여 신청하는 경우</li>
        </ul>
      </li>
      <li>&apos;회사&apos;는 &apos;디파이너리&apos; 관련 설비의 여유가 없거나 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.</li>
      <li>본 조에 따라 이용신청의 승낙을 하지 아니하거나 유보한 경우, &apos;회사&apos;는 필요에 따라 이를 &apos;이용 신청자&apos;에게 알립니다.</li>
      <li>&apos;회원사&apos; 또는 &apos;구성원&apos;이 &apos;유료 플랜&apos;을 이용하기 위해서는 &apos;관리자&apos; 등 &apos;회원사&apos;를 대표하는 &apos;구성원&apos;이 &apos;디파이너리 콘솔&apos; 혹은 &apos;회사&apos; 담당자를 통해 이용 신청을 완료해야 합니다.</li>
      <li>&apos;디파이너리&apos;의 기능 중 일부는 본 약관과는 별도의 이용 약관 확인 및 동의를 &apos;디파이너리 콘솔&apos;에서 완료한 이후에 활성화됩니다.</li>
    </ol>

    {/* 제6조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 6 조 (정보의 변경)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;구성원&apos;은 어카운트 관리 화면을 통해 언제든지 본인의 정보를 열람하고 수정할 수 있습니다. 그러나 &apos;회사&apos;나 &apos;회원사&apos;내지 &apos;관리자&apos;가 수정을 불허하는 항목의 수정은 &apos;회사&apos;나 &apos;회원사&apos;내지 &apos;관리자&apos;와 사전 합의가 필요합니다.</li>
      <li>&apos;회원사&apos;와 &apos;구성원&apos;이 자신의 정보에 대한 변경사항을 적절히 수정하지 않아 발생한 불이익에 대하여 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
    </ol>

    {/* 제7조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 7 조 (개인정보 보호 의무)</h3>
    <p className="text-body2 mb-3">
      회사&apos;가 본 약관 제15조 2항에 따라 &apos;회원사&apos;의 서비스로부터 획득하는 데이터에는 개인정보보호법 상의 개인정보를 포함하지 않습니다. 단, 본 약관의 이행을 위하여 필요한 개인정보 등을 제공받게 되거나 제공하게 되는 경우 &apos;회사&apos;는 『개인정보보호법』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 개인정보 보호에 관한 관련 법령을 준수합니다.
    </p>

    {/* 제8조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 8 조 (아이디 및 비밀번호 관리에 대한 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회원사&apos; 및 &apos;구성원&apos;이 &apos;디파이너리 콘솔&apos;에 접속하기 위한 아이디(이메일)와 비밀번호에 관한 관리책임은 &apos;회원사&apos; 및 &apos;구성원&apos;에게 있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.</li>
      <li>&apos;회사&apos;는 &apos;회원사&apos; 또는 &apos;구성원&apos;의 아이디, 비밀번호, 개인정보가 유출될 우려가 있거나 &apos;회사&apos; 또는 &apos;회사&apos;의 운영자로 오인될 우려가 있는 경우 해당 아이디의 이용을 제한할 수 있습니다.</li>
      <li>&apos;회원사&apos; 및 &apos;구성원&apos;은 아이디나 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 &apos;회사&apos;에 통지하고 &apos;회사&apos;의 안내에 따라야 합니다.</li>
      <li>전항의 경우에 해당 &apos;회원사&apos; 및 &apos;구성원&apos;이 &apos;회사&apos;에 그 사실을 통보하지 않거나, 통지 후 &apos;회사&apos;의 안내에 따르지 않아 발생한 불이익에 대하여 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
    </ol>

    {/* 제9조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 9 조 (&apos;회원사&apos; 등에 대한 통지)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;가 &apos;회원사&apos;와 &apos;구성원&apos;에게 통지를 하는 경우 이 계약에 별도 규정이 없는 한 이용 신청 시 등록한 전자우편주소를 통해 통지합니다.</li>
      <li>&apos;회사&apos;가 &apos;관리자&apos;에게 통지한 경우 해당 통지가 &apos;일반 구성원&apos;에게도 전달된 것으로 간주합니다.</li>
      <li>&apos;구성원&apos; 전체에 대한 통지의 경우 &apos;회사&apos;는 7일 이상 &apos;디파이너리 사이트&apos;에 해당 내용을 게시함으로써 전항의 통지를 갈음할 수 있습니다.</li>
    </ol>

    {/* 제10조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 10 조 (&apos;회사&apos;의 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 관련 법령과 본 약관이 금지하는 행위, 및 선량한 풍속 기타 사회질서에 위반하는 행위를 하지 않으며, 계속적이고 안정적으로 &apos;디파이너리&apos;를 제공하기 위해 최선의 노력을 다합니다.</li>
      <li>&apos;회사&apos;는 &apos;디파이너리&apos; 이용과 관련하여 발생하는 &apos;이용자&apos;의 불만 또는 필요사항을 적절하게 처리할 수 있도록 필요한 인력 및 시스템을 구비합니다.</li>
      <li>&apos;회사&apos;가 &apos;회원사&apos; 또는 &apos;구성원&apos;에 대한 &apos;디파이너리&apos;의 제공이 불가능해지는 경우, &apos;회사&apos;는 &apos;디파이너리&apos;의 제공 중지일자의 1개월 전까지 제9조에서 정한 방법으로 &apos;구성원&apos;에게 통지합니다. 다만, &apos;회사&apos;가 사전에 통지할 수 없는 부득이한 사유(국가 비상사태, 정전, 기간통신망 장애, 디스크 장애, 기반 시스템 장애 등)가 있는 경우 사후에 통지할 수 있습니다.</li>
    </ol>

    {/* 제11조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 11 조 (&apos;회원사&apos; 및 &apos;구성원&apos;의 의무)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회원사&apos; 및 &apos;구성원&apos;은 아래 각 호의 행위를 하여서는 안됩니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>이용신청 시 사실이 아닌 내용이나 자료를 제공, 고지 또는 등록하는 행위</li>
          <li>타인의 정보를 도용하는 행위</li>
          <li>&apos;회사&apos; 및 기타 제3자의 저작권 등 지적재산권 및 권리 일체에 대한 침해</li>
          <li>&apos;회사&apos; 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          <li>회사&apos;의 동의 없이 영리 행위를 목적으로 &apos;디파이너리&apos;를 사용하는 행위</li>
          <li>&apos;디파이너리&apos;의 정상적인 이용범위를 벗어나 &apos;디파이너리&apos;를 사용하는 행위</li>
          <li>기타 불법적이거나 부당한 행위</li>
        </ul>
      </li>
      <li>&apos;회원사&apos;와 &apos;구성원&apos;은 관련 법령, 본 약관, &apos;디파이너리&apos; 헬프센터 내 도움말, &apos;디파이너리&apos;와 관련하여 &apos;회사&apos;가 공지한 주의사항 및 통지사항 등을 준수해야 하며, 기타 &apos;회사&apos;의 업무에 방해되는 행위를 하여서는 안됩니다.</li>
      <li>필요한 경우 &apos;회원사&apos;는, &apos;회원사&apos;가 &apos;최종 이용자&apos;의 디바이스로부터 수집하는 데이터에 대하여 &apos;최종 이용자&apos;로부터 데이터 수집, 이용, 제3자 제공, 제3자 위수탁 등을 고지하고 명시적 동의를 받아야 하며, 관련 법령 등에 따라 보안조치를 취해야 합니다. &apos;회원사&apos;가 이와 관련된 적절한 조치 내지 절차를 취하지 않아 발생하는 상황에 대한 일체의 책임은 &apos;회원사&apos;가 부담합니다. &apos;디파이너리&apos;가 기능 제공을 위해 모바일 디바이스로부터 획득하는 데이터는 본 약관 제15조 제 2항에 명시합니다.</li>
      <li>유럽 개인정보 보호법(G.D.P.R) 발효 국가 혹은 지역에서 모바일 어플리케이션을 운영하는 &apos;회원사&apos;의 경우 관련 법령 및 &apos;디파이너리&apos;가 제공하는 &apos;GDPR 설정&apos; 연동 가이드를 이용하여 적절한 조치를 취해야 합니다. &apos;회원사&apos;가 이와 관련된 적절한 조치 내지 절차를 취하지 않아 발생하는 상황에 대한 일체의 책임은 &apos;회원사&apos;가 부담합니다.</li>
      <li>&apos;관리자&apos;는 &apos;계정&apos;에 소속된 &apos;구성원&apos;이 본 조에 명시된 의무를 준수하도록 조치하여야 합니다. &apos;구성원&apos;이 본 조의 의무를 위한한 경우 &apos;회사&apos;는 해당 &apos;구성원&apos;에 대한 제재 등 &apos;관리자&apos;의 권한 일부를 직접 행사할 수 있습니다.</li>
      <li>&apos;관리자&apos;는 &apos;계정&apos;에 초대하는 &apos;구성원&apos;에게 부여하는 역할의 의미와 데이터 열람 범위를 확인해야 합니다. 이를 확인하지 않고 발생하는 모든 손실, 손해에 대한 책임은 &apos;회원사&apos; 및 &apos;관리자&apos;가 부담합니다.</li>
      <li>&apos;회원사&apos;는 &apos;회사&apos;의 명시적인 사전 서면 동의가 없는 한 &apos;디파이너리&apos;의 이용권한, 기타 이용 계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</li>
    </ol>

    {/* 제 2 장 */}
    <h2 className="text-heading3 mt-14 mb-6">제 2 장 &apos;디파이너리&apos; 이용 일반</h2>

    {/* 제12조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 12 조 (&apos;디파이너리&apos;의 제공)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 &apos;디파이너리&apos;를 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</li>
      <li>&apos;회사&apos;는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 &apos;디파이너리&apos;의 제공을 일시적으로 중단할 수 있습니다. 이 경우 &apos;회사&apos;는 &apos;디파이너리&apos;의 제공이 중단되기 7일 전에 제9조에서 정한 방법으로 &apos;이용자&apos;에게 통지합니다. 다만, &apos;회사&apos;가 사전에 통지할 수 없는 부득이한 사유(국가 비상사태, 정전, 기간통신망 장애, 디스크 장애, 기반 시스템 장애 등)가 있는 경우 사후에 통지할 수 있습니다.</li>
      <li>&apos;회사&apos;는 &apos;디파이너리&apos;의 제공에 필요한 경우 정기점검을 시행할 수 있으며, 정기점검 시간은 &apos;디파이너리 사이트&apos;에 공지한 바에 따릅니다.</li>
    </ol>

    {/* 제13조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 13 조 (&apos;디파이너리&apos;의 변경)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 &apos;디파이너리&apos;의 전부 또는 일부를 변경할 수 있습니다.</li>
      <li>&apos;디파이너리&apos;의 제공기능, 이용방법, 이용금액 등에 대하여 변경이 있는 경우에는 변경사유와 내용을 그 변경 사항 적용 전에 &apos;디파이너리 사이트&apos;에 게시합니다.</li>
      <li>&apos;회원사&apos; 및 &apos;구성원&apos;은 본 조에 의한 &apos;디파이너리&apos;의 변경에 동의하지 않을 경우 &apos;디파이너리&apos; 이용계약을 해지할 수 있습니다.</li>
    </ol>

    {/* 제14조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 14 조 (&apos;디파이너리&apos;에 대한 권리)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;디파이너리 SDK&apos; 및 &apos;디파이너리 사이트&apos; 내에서 제공되는 모든 소프트웨어, 기능, 문서, 콘텐츠, 브랜드의 표현 방식 등 일체는 오직 &apos;회사&apos;의 재산이고 &apos;회사&apos;는 이를 독점적으로 소유하며, 이에 대한 저작권 등 일체의 권리는 &apos;회사&apos;에 귀속합니다.</li>
      <li>&apos;디파이너리 SDK&apos; 및 &apos;디파이너리&apos;는 본 약관과 &apos;디파이너리 사이트&apos;에 명시 혹은 공지된 목적에 맞게 사용되어야 합니다.</li>
      <li>&apos;회원사&apos; 또는 &apos;구성원&apos;이 다음 각 호에 해당하는 행위를 할 경우 &apos;회사&apos;는 사전 통지 없이 이용계약을 해지하거나, &apos;디파이너리&apos; 이용을 제한할 수 있으며, 손해가 발생했을 경우 발생한 모든 배상을 청구할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&apos;디파이너리SDK&apos; 및 &apos;디파이너리&apos;의 정상적인 사용범위를 벗어나서 사용하거나 &apos;회사&apos;의 사전 동의 없는 &apos;디파이너리 SDK&apos; 및 &apos;디파이너리&apos; 라이선스 재판매, 배포 행위</li>
          <li>&apos;디파이너리SDK&apos; 및 &apos;디파이너리&apos;와 관련하여 소스코드를 검출하거나 무단 복제 또는 개작, 파생물 제작, 역설계, 분해 또는 디컴파일 하는 등의 행위</li>
          <li>&apos;디파이너리 SDK&apos;를 불법행위를 수행하기 위한 수단으로 사용한 경우</li>
          <li>&apos;디파이너리 SDK&apos;를 이용하여 &apos;회사&apos;의 사전 동의 없는 영리 행위를 한 경우</li>
          <li>&apos;디파이너리 SDK&apos; 또는 &apos;디파이너리 SDK&apos; 연동 가이드를 &apos;회사&apos;의 사전 동의 없이 복제, 수정, 제3자에게 배포하거나 전송한 경우</li>
          <li>&apos;디파이너리 SDK&apos;를 이용하여 &apos;최종 이용자&apos; 정보를 불법적으로 수집한 경우</li>
        </ul>
      </li>
    </ol>

    {/* 제15조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 15 조 (&apos;디파이너리 SDK&apos; 수집 데이터)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;디파이너리&apos; 기능 제공을 목적으로 &apos;디파이너리 SDK&apos;가 &apos;회원사&apos;의 &apos;최종 이용자&apos; 모바일 디바이스로부터 수집하는 데이터는 오직 &apos;회원사&apos; 소유입니다.</li>
      <li>&apos;디파이너리 SDK&apos;는 광고식별값(ADID,IDFA), 플랫폼 정보(Android, iOS), 어트리뷰션 시 광고 매체 파트너사 정보, IP주소, 이용 네트워크(3G, wifi), 디바이스 모델명/제조사명/해상도, 디바이스 통신사명, 디바이스 설정 언어/국가, 마켓 인스톨러 데이터를 &apos;회원사&apos;의 &apos;최종 이용자&apos; 모바일 디바이스로부터 수집합니다.</li>
      <li>&apos;디파이너리 SDK&apos;를 통해 수집되는 &apos;회원사&apos;의 데이터는 특정 개인을 식별할 수 있는 데이터를 포함하고 있지 않아야 합니다. 필요한 경우 &apos;회원사&apos;는 복호화가 불가능한 암호화 등 적절한 방법을 적용하여 데이터를 수집·처리·관리해야 합니다. &quot;회원사&quot;가 관련 조치를 수행하지 않아 발생한 문제에 대하여 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
    </ol>

    {/* 제16조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 16 조 (&apos;디파이너리&apos; 이용제한)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;는 다음 각 호의 경우 &apos;회원사&apos;에 대한 별도의 통지 없이 &apos;회원사&apos; 혹은 &apos;구성원&apos;의 &apos;디파이너리&apos; 이용을 제한할 수 있습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>&apos;회원사&apos; 또는 &apos;구성원&apos;이 본 약관을 위반하거나 &apos;디파이너리&apos;의 정상적인 운영을 방해하는 경우</li>
          <li>&apos;회원사&apos;가 제공하는 모바일 어플리케이션이 음란물, 폭력물, 도박, 사회적 공익 저해 등 사회 공공질서 및 미풍양속을 저해하는 콘텐츠 제공을 목적으로 하는 경우</li>
          <li>&apos;회원사&apos;의 서비스가 제공되는 국가(지역의 정부 및 기타 규제 당국을 포함함)에서 불법으로 규정된 콘텐츠 혹은 기능이 &apos;회원사&apos;의 서비스를 통해서 제공되는 경우</li>
          <li>&apos;회원사&apos;가 이용중인 &apos;광고 매체 파트너사&apos;의 광고 트래픽 중 일부 또는 전체 트래픽이 &apos;부정 트래픽&apos;으로 의심되는 구체적인 상황을 발견된 경우</li>
          <li>&apos;회원사&apos;가 서비스 이용에 대한 이용요금 지급을 지체하는 경우</li>
        </ul>
      </li>
      <li>전 1항에 따라 서비스 이용이 제한된 경우, &quot;회원사&quot;는 제1항에 따라 &apos;디파이너리&apos; 이용이 제한된 날로부터 30일 이내에 전1항 각 호에 해당하는 사실이 없음을 주장 할 수 있으며, 상기 기한 내에 이러한 주장이 제기되지 않거나 위반 사실이 없음을 객관적이고 합리적인 근거를 토대로 입증하지 못하는 경우 본 이용 계약은 해지될 수 있습니다.</li>
    </ol>

    {/* 제17조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 17 조 (&apos;디파이너리&apos; 이용 지원)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회원사&apos; 혹은 &apos;구성원&apos;이 &apos;디파이너리&apos; 기능 이용 혹은 &apos;디파이너리 SDK&apos; 적용과 관련하여 전자우편, 유선, 구두 전달 등의 방법으로 지원을 요청했을 경우, &apos;회사&apos;의 담당자들은 요청받은 사항을 지원하기 위해 &apos;회원사&apos;의 서비스 정보가 등록된 &apos;디파이너리 콘솔&apos; 혹은 &apos;회원사&apos;의 서비스 빌드 파일에 접근할 수 있는 권리를 &apos;회원사&apos;로부터 부여받은 것으로 간주합니다.</li>
      <li>&apos;회사&apos;는 &apos;디파이너리&apos;의 개선과 신규 기능 제공, &apos;회원사&apos; 대상 통계 데이터 제공을 목적으로 &apos;디파이너리 SDK&apos; 및 &apos;회원사&apos;의 &apos;디파이너리 SDK&apos; 이용 과정에서 수집되는 데이터 중 &apos;최종 이용자&apos; 및 &apos;회원사&apos;의 서비스를 특정할 수 없도록 처리된 자료를 수집, 가공, 이용할 수 있습니다.</li>
    </ol>

    {/* 제18조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 18 조 (책임제한)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;가 천재지변, 전쟁, 내란, 폭동, 화재, 테러,홍수, 지진, 폭풍, 정부의 규제, 해킹, 전염병의 창궐 및 기타 이에 준하는 불가항력 등의 공급자가 통제할 수 없는 사유로 인하여 &apos;디파이너리&apos;를 제공할 수 없는 경우에는 &apos;디파이너리&apos; 제공에 관한 책임이 면제됩니다.</li>
      <li>&apos;회사&apos;는, &apos;회원사&apos; 또는 &apos;구성원&apos;과 제3자간에 &apos;디파이너리&apos;를 매개로 이루어진 거래 등에 관하여는 책임을 지지 않습니다.</li>
      <li>&apos;회사&apos;는 회사의 고의 또는 중과실이 있는 경우를 제외하고 &apos;무료 플랜&apos; 또는 무료로 제공되는 &apos;디파이너리&apos; 기능 이용과 관련하여 어떠한 책임도 지지 않습니다.</li>
      <li>&apos;디파이너리&apos;와 결합하여 제공되는 상품의 경우, &apos;회사&apos;가 제공하는 &apos;디파이너리&apos;를 제외한 나머지 상품의 이용상 발생하는 문제에 대하여 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
      <li>&apos;세일즈 파트너사&apos;, &apos;테크 파트너사&apos;를 통해 계약이 체결되는 경우, &apos;회사&apos;는 &apos;세일즈 파트너사&apos;와 &apos;회원사&apos; 간, &apos;테크 파트너사&apos;와 &apos;회원사&apos; 간에 발생한 분쟁에 대하여는 책임을 지지 않습니다.</li>
      <li>&apos;포스트백&apos; 데이터의 최종 수신 주체가 &apos;광고 매체 파트너사&apos;, &apos;세일즈 파트너사&apos;, &apos;테크 파트너사&apos; 혹은 &apos;회원사&apos;(관리자, 일반구성원 포함)가 직접 지정한 제3의 업체 혹은 특정 저장소일 경우, &apos;포스트백&apos;을 수신한 주체가 데이터를 수집, 가공, 처리, 이용하는 방식과 의도와 관련하여 &apos;회원사&apos;와 최종 &apos;포스트백&apos; 수신 주체 간 문제에 대해 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
      <li>&apos;회사&apos;는 &apos;회원사&apos;가 &apos;디파이너리&apos;를 이용하여 기대하는 수익 및 효과를 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.</li>
      <li>&apos;회사&apos;는 &apos;회원사&apos;가 &apos;디파이너리&apos;를 이용하여 얻은 자료로 인한 손해에 대하여 책임을 지지 않습니다.</li>
    </ol>

    {/* 제19조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 19 조 (&apos;유료 플랜&apos;의 신청, 결제, 해지)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회원사&apos;는 &apos;디파이너리 콘솔&apos; 또는 &apos;회사&apos;에 직접 연락하여 &apos;유료 플랜&apos; 가입을 신청할 수 있습니다. &apos;유료 플랜&apos;에 대한 정의와 구성 등 내용은 본 약관에 규정된 내용 외에는 &apos;디파이너리 사이트&apos;에 게시된 내용 또는 &apos;회사&apos;와 별도 합의한 내용에 따르며, 본 약관에 규정된 내용, &apos;디파이너리 사이트&apos;에 게시된 내용, 및 &apos;회사&apos;와 별도 합의한 내용 사이에 다름이 있는 경우, (1) &apos;회사&apos;와 별도 합의한 내용, (2) &apos;디파이너리 사이트&apos;에 게시된 내용, (3) 본 약관의 순서로 우선적으로 적용됩니다.</li>
      <li>&apos;회원사&apos; 및 &apos;관리자&apos;는 &apos;유료 플랜&apos;을 신청하기 전에 반드시 &apos;회사&apos;가 &apos;디파이너리 사이트&apos;를 통해 제공하는 각 플랜의 이용조건과 거래조건 등 &apos;유료 플랜&apos;에 대한 제반사항을 확인한 후 신청해야 합니다. 이를 확인하지 않고 &apos;유료 플랜&apos;을 신청하여 발생하는 모든 손실, 손해에 대한 책임은 &apos;회원사&apos; 및 &apos;관리자&apos;가 부담합니다.</li>
      <li>&apos;유료 플랜&apos; 신청 및 과금 단위는 &apos;계정&apos;에 등록된 단위 서비스 한 개 단위입니다.</li>
      <li>&apos;디파이너리&apos;의 &apos;유료 플랜&apos;에 대한 결제는 신용카드, 계좌이체 등 상호 선택 혹은 협의된 방식을 통해 이루어집니다.</li>
      <li>&apos;회사&apos;는 &apos;회원사&apos;가 이용 중인 &apos;디파이너리&apos;의 &apos;유료 플랜&apos;의 전월 요금을 매월 5일 전까지 &apos;디파이너리 콘솔&apos; 또는 별도의 &apos;청구서&apos;로 청구합니다.</li>
      <li>&apos;회원사&apos;는 &apos;디파이너리&apos;의 &apos;유료 플랜&apos;에 대해 세금을 포함하여 지불해야 합니다. 세금은 &apos;회원사&apos;의 주소지 국가 세법에 따라서 지정됩니다.</li>
      <li>&apos;회원사&apos;가 청구요금을 미결제하여 발생하는 연체 기간에도 데이터가 보관되므로 연체 기간에 대한 요금도 결제해야 하며, 연체 기간에는 월 3%의 연체 가산금이 추가 부과됩니다.</li>
      <li>&apos;회원사&apos;는 &apos;디파이너리 콘솔&apos; 혹은 &apos;회사&apos;에 직접 연락하여 &apos;유료 플랜&apos; 이용을 해지할 수 있으며, 이 경우 &apos;회사&apos;는 연체 금액 및 당월 사용금액을 계산하여 청구합니다.</li>
      <li>&apos;유료 플랜&apos; 이용을 해지할 경우 &apos;무료 플랜&apos;으로 전환됩니다. &apos;무료 플랜&apos;은 일부 혹은 전체 기능에 제한이 있을 수 있으며, &apos;무료 플랜&apos;으로 전환된 후 &apos;회원사&apos; 및 &apos;구성원&apos;은 제한이 발생하는 기능과 그 기능을 구성하는 원천 데이터에 접근할 수 없습니다. 필요할 경우 &apos;회원사&apos; 및 &apos;구성원&apos;은 이용해지 전 필요한 데이터를 스스로 백업해야 하며, 백업하지 않아 발생한 문제에 대해 &apos;회사&apos;는 책임을 부담하지 않습니다.</li>
    </ol>

    {/* 제20조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 20 조 (&apos;디파이너리&apos; 중단 시 보상 등)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;회사&apos;의 책임 있는 사유로 인해 &apos;&apos;디파이너리&apos;가 중단되는 경우 &apos;회사&apos;는 &apos;회사&apos;의 보상정책에 따라 &apos;회원사&apos;에 보상합니다. 본 조의 보상정책은 &apos;유료 플랜&apos;을 이용하는 &apos;회원사&apos;에 한하여 적용됩니다.</li>
      <li>&apos;회사&apos;는 &apos;디파이너리&apos;의 월간 가동 시간 비율[해당월의 총 시간(분)에서 해당월에 발생한 중단시간(분)을 뺀 후 해당 월의 총 시간(분)으로 나눈 값, 이하 동일]을 매월 99.5% 이상으로 유지합니다.</li>
      <li>&apos;회사&apos;가 월간 가동 시간 비율을 99.5% 제공하지 못하였을 경우, &apos;회사&apos;는 다음 각 호에 명시된 기준에 따라 &apos;회원사&apos;에 보상합니다. 단, 매 1개월 기준 보상 금액은 월 이용 금액의 25%를 초과하지 않습니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>월간 가동 시간 비율이 99.5% ~ 99% 인 경우 : 중단이 발생한 월 이용 금액의 5%</li>
          <li>월간 가동 시간 비율이 99% ~ 95% 인 경우 : 중단이 발생한 월 이용 금액의 15%</li>
          <li>95% 이하 : 중단이 발생한 월 이용 금액의 25%</li>
        </ul>
      </li>
      <li>다음 각 호의 경우에는 본 조의 보상에서 제외됩니다.
        <ul className="list-disc pl-5 space-y-1 text-body2 mb-4 mt-2">
          <li>제14조 3항에서 정하는 &apos;회원사&apos;의 &apos;디파이너리&apos; 불법적인 사용 행위에 해당하는 경우</li>
          <li>제16조에서 정하는 &apos;디파이너리&apos; 이용 제한 사유에 해당하는 경우</li>
          <li>단순 &apos;디파이너리 콘솔&apos; 접속 오류에 해당하는 경우</li>
          <li>&apos;beta&apos;가 표시된 기능이 중단된 경우</li>
          <li>기타 &apos;회원사&apos;가 소유 또는 관리하는 장비의 장애(&apos;회사&apos;의 주요 통제범위에 속하지 않는 문제)로 인해 발생하는 &apos;디파이너리&apos; 중단의 경우</li>
        </ul>
      </li>
      <li>&apos;회원사&apos;는 본 조에 따른 보상의 청구를 위해, 청구사유, 청구금액 및 산출근거를 기재하여 &apos;디파이너리&apos; 중단이 발생한 시점으로부터 30일 이내에 &apos;디파이너리 사이트&apos;내 접수처를 통해 청구해야 하며, 해당 기한 이후의 청구 건은 보상 대상에서 제외됩니다.</li>
    </ol>

    {/* 제 3 장 기타 */}
    <h2 className="text-heading3 mt-14 mb-6">제 3 장 기타</h2>

    {/* 제21조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 21 조 (관할법원)</h3>
    <p className="text-body2 mb-3">
      &apos;디파이너리&apos; 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 상호 협의에 의하여 해결하되, 합의가 이루어지지 않아 분쟁이 발생하는 경우 서울중앙지방법원을 전속적 합의 관할로 합니다.
    </p>

    {/* 제22조 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">제 22 조 (온라인 약관 동의의 예외 상황)</h3>
    <ol className="list-decimal pl-5 space-y-2 text-body2 mb-6">
      <li>&apos;디파이너리 사이트&apos; 에서의 약관 동의 및 &apos;유료 플랜&apos; 신청이 불가능할 경우, &apos;회사&apos;는 인쇄 가능한 약관 및 신청서를 전자우편으로 전달합니다. &apos;회원사&apos;는 제공받은 약관을 두 통 인쇄하여 대표이사 혹은 임원 날인한 뒤, 등기 우편으로 &apos;회사&apos;에 발송함으로써 본 약관에 동의를 표합니다.</li>
      <li>&apos;회원사&apos;가 제출한 날인 완료된 &apos;약관&apos;에 &apos;회사&apos;의 대표이사가 날인하여 한 통을 &apos;회원사&apos;에 발송함으로써 본 약관은 유효한 계약으로 성립합니다.</li>
    </ol>

    {/* 부칙 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">[부칙]</h3>
    <p className="text-body2 mb-3">
      본 &apos;약관&apos;은 2021년 9월 1일부터 적용됩니다.
    </p>

    {/* 이전 약관 보기 */}
    <h3 className="text-[16px] font-medium mt-10 mb-3">[이전 약관 보기]</h3>
    <ul className="list-disc pl-5 space-y-1 text-body2 mb-4">
      <li>시행일자: 2021.04.23 ~ 2021.08.31 <a href="/term/dfinery/210831" className="text-primary underline">(클릭)</a></li>
    </ul>
  </>
);
