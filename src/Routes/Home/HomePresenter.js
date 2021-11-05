import React from "react";
import UpSection from "./Parts/UpSection";
import styled from "styled-components";
import Banner from "./Parts/Banner";

const Container = styled.div`
    position: relative;
    width: 1440px;
    height: 2496px;
`;
const Elements = styled.div`
    position: absolute;
`;
const HomePresenter = ()=>
(
    <Container>
            <Banner />
    </Container>
    
    
);


export default HomePresenter;