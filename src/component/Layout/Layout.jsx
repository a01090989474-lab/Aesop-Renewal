import "./Layout.scss";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  );
};

export default Layout;
