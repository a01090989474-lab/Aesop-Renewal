import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import MyPage from "./page/Mypage/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
