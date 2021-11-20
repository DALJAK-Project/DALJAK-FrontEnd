import React from "react";
import { Header } from "../Home/Components/Header";
import { Box } from "../Home/Components/Box";
import Cardbox from "./Components/Cardbox";
import { Accessories } from "./Components/Accessories";

function HomePresenter() {
  return (
    <div className="home">
      <Nav />
      <Box />
      <Cardbox />
      <Accessories />
    </div>
  );
}

export default HomePresenter;
