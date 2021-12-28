import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";
import Community from "./Community/Community";
import Create from "./Community/Create";
import Daljak from "./Daljak/Daljak";
import DaljakDetail from "./Daljak/DaljakDetail";
import Home from "./Routes/Home";
import MyPage from "./Routes/Mypage";

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  // <Router>
  //   <Routes>
  //     <Route path="/about" component={Community} exact={true} />
  //     <Route path="/create" component={Create} />
  //   </Routes>
  // </Router>
  <BrowserRouter>
    <Routes>
      <Route path="/daljak" element={<Daljak />} />
      <Route path="/daljak/detail" element={<DaljakDetail />} />
      <Route path="/daljak/detail" element={<DaljakDetail />} />
      <Route path="/" element={<Home />} />

      <Route path="/create" element={<Create />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  </BrowserRouter>
);

// 라우터가 안되는 이유가 뭘까?????
