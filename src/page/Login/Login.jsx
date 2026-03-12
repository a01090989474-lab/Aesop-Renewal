import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      {/* 왼쪽 이미지 */}
      <div className="login_image">
        <img src="/images/login/loginimg.png" alt="Aesop" />
      </div>

      {/* 오른쪽 폼 */}
      <div className="login_content">
        <h1 className="login_title">Welcom to Aesop</h1>
        <p className="login_desc">
          이솝에 오신것을 환영합니다.
          <br />
          다양한 혜택과 빠른 주문을 위해 로그인해주시기 바랍니다.
        </p>

        <div className="login_form">
          {/* 이메일 */}
          <div className="login_field">
            <label>EMAIL</label>
            <input type="email" placeholder="이메일을 입력해주세요" />
          </div>

          {/* 비밀번호 */}
          <div className="login_field">
            <label>PASSWORD</label>
            <input type="password" placeholder="••••••••" />
          </div>

          {/* 이메일/비밀번호 찾기 */}
          <div className="login_find">
            <a href="#">이메일 찾기 / 비밀번호 찾기</a>
          </div>

          {/* 버튼 */}
          <button className="login_btn">Log in</button>
          <button className="login_btn">Sign in</button>
        </div>

        {/* SNS 로그인 */}
        <div className="login_sns">
          <div className="login_sns_divider">
            <span>SNS 로그인</span>
          </div>
          <div className="login_sns_icons">
            <button aria-label="네이버 로그인">
              <img src="/images/login/naver.png" alt="naver" />
            </button>
            <button aria-label="카카오 로그인">
              <img src="/images/login/kakao.png" alt="kakao" />
            </button>
            <button aria-label="구글 로그인">
              <img src="/images/login/google.png" alt="google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
