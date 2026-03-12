import "./Layout.scss";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
