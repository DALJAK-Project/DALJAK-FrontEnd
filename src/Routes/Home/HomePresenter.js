import React from "react";
import {Header} from "../Home/Components/Header";
import {Box} from "../Home/Components/Box";
import styled from "styled-components";
import { Cardbox } from "./Components/Cardbox";
import { Accessories } from "./Components/Accessories";
const Container = styled.div`
    position: relative;
    width: 1440px;
    height: 2496px;
`;
export function HomePresenter(){
    return(
        <Container>
            <Header />
            <Box/>
            <Cardbox/>
            <Accessories />
        </Container>
    );
}