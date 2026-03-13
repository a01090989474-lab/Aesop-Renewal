import "./MyPage.scss";

const MyPage = () => {
  return (
    <div className="mypage">
      {/* 왼쪽 사이드바 */}
      <aside className="mypage_sidebar">
        <nav className="mypage_nav">
          <p className="mypage_nav_title">마이페이지</p>
          <ul>
            <li>
              <a href="#">주문내역</a>
            </li>
            <li>
              <a href="#">위시리스트</a>
            </li>
            <li>
              <a href="#">문의하기</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* 세로 구분선 */}
      <div className="mypage_divider"></div>

      {/* 오른쪽 콘텐츠 */}
      <div className="mypage_content">
        {/* 타이틀 */}
        <div className="mypage_header">
          <h1 className="mypage_title">A seeker of mindful beauty, selin</h1>
          <button className="mypage_edit">Edit</button>
        </div>

        {/* 개인 정보 */}
        <div className="mypage_section">
          <h2 className="mypage_section_title">개인 정보</h2>
          <div className="mypage_section_divider"></div>
          <div className="mypage_section_content">
            <div className="mypage_row">
              <div className="mypage_item">
                <span className="mypage_label">이름</span>
                <span className="mypage_value">최세린</span>
              </div>
              <div className="mypage_item">
                <span className="mypage_label">생년월일</span>
                <span className="mypage_value">2000.05.25</span>
              </div>
            </div>
            <div className="mypage_row">
              <div className="mypage_item">
                <span className="mypage_label">이메일</span>
                <span className="mypage_value">selin_97@naver.com</span>
              </div>
              <div className="mypage_item">
                <span className="mypage_label">성별</span>
                <span className="mypage_value">남성 &nbsp; 여성</span>
              </div>
            </div>
          </div>
        </div>

        {/* 배송 정보 */}
        <div className="mypage_section">
          <h2 className="mypage_section_title">배송 정보</h2>
          <div className="mypage_section_divider"></div>
          <div className="mypage_section_content">
            <div className="mypage_row">
              <div className="mypage_item">
                <span className="mypage_label">전화번호</span>
                <span className="mypage_value">010.6203.4128</span>
              </div>
              <div className="mypage_item">
                <span className="mypage_label">우편번호</span>
                <span className="mypage_value">01403</span>
              </div>
            </div>
            <div className="mypage_row">
              <div className="mypage_item">
                <span className="mypage_label">국가</span>
                <span className="mypage_value">대한민국</span>
              </div>
              <div className="mypage_item">
                <span className="mypage_label">성별</span>
                <span className="mypage_value">
                  서울 도봉구 노해로63가길 7 창동, 상아2차아파트
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 보안 설정 */}
        <div className="mypage_section">
          <h2 className="mypage_section_title">보안 설정</h2>
          <div className="mypage_section_divider"></div>
          <div className="mypage_section_content">
            <div className="mypage_item">
              <span className="mypage_label">비밀번호</span>
              <span className="mypage_value">비밀번호 변경</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
