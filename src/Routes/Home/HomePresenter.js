import React from "react";
import {Header} from "../Home/Components/Header";
import {Box} from "../Home/Components/Box";
import styled from "styled-components";
import { Cardbox } from "./Components/Cardbox";
import { Accessories } from "./Components/Accessories";

function HomePresenter(){
    return(
        <div>
            <Header />
            <Box/>
            <Cardbox/>
            <Accessories />
        </div>
    );
}

export default HomePresenter;