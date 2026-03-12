import "./Header.scss";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";

const Header = () => {
  const navItems = [
    { name: "AE-GUNG", special: true },
    { name: "GIFT" },
    { name: "BEST" },
    { name: "HAND" },
    { name: "BODY" },
    { name: "FRAGRANCE" },
    { name: "ROOM" },
  ];

  return (
    <header className="header">
      <div className="header_inner">
        {/* 로고 */}
        <div className="header_logo">
          <a href="/">
            <img src="/images/common/Logo.png" alt="Aesop" />
          </a>
        </div>

        {/* 네비게이션 */}
        <nav className="header_nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href="#" className={item.special ? "special" : ""}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 아이콘 */}
        <div className="header_icons">
          <button aria-label="검색">
            <CiSearch />
          </button>
          <button aria-label="마이페이지">
            <CiUser />
          </button>
          <button aria-label="장바구니">
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
