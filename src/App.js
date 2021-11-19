import React from "react";
import {
  HashRouter,
  Route,
  Routes,
  BrowserRouter,
  Router,
} from "react-router-dom";
import Community from "./Community/Community";
import Create from "./Community/Create";

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Community />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </BrowserRouter>
);

// 라우터가 안되는 이유가 뭘까?????
