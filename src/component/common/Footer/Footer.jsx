import "./Footer.scss";

const Footer = () => {
  const policyLinks = [
    "개정약관",
    "채용정보",
    "이용약관",
    "개인정보처리방침",
    "영상정보처리기기 운영관리방침",
    "사이트맵",
    "고객지원",
  ];

  const snsLinks = ["Instagram", "SpaceX", "Kakaotalk", "Linkedin"];

  return (
    <footer className="footer">
      <div className="footer_inner">
        {/* 상단 정보 영역 */}
        <div className="footer_top">
          <div className="footer_left">
            {/* 정책 링크 */}
            <ul className="footer_policy">
              {policyLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            {/* 회사 정보 */}
            <div className="footer_info">
              <p>
                엘오케이(유) | 대표자: REBELO PIZARRO RODRIGO ALVARO &nbsp;
                서울특별시 강남구 영동대로 517 아셈타워 31층 | 대표전화:
                1800-1987
              </p>
              <p>
                사업자 번호: 220-81-73483 | 통신판매업신고: 2012-서울강남-01663
                사업자정보확인하기
              </p>
              <p>© Aesop</p>
            </div>
          </div>

          {/* SNS 링크 */}
          <ul className="footer_sns">
            {snsLinks.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 구분선 */}
        <div className="footer_line"></div>

        <div className="footer_logo">
          <img src="/images/common/FooterLogo.png" alt="Aesop" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
