import React from "react"
import styled from "styled-components";

const R17 = styled.div`
    position: relative;
    width: 1440px;
    height: 669px;
    left: 0px;
    top: 14px;

    background: #585858;
`;
const Logo = styled.div`
    position:absolute;
    background-color:white;
    width: 306px;
    height: 356px;
    margin-left: 130px;
    margin-top:154.98px;
`;
const TipGroup=styled.div`
    position:absolute;

`;
const Tip1 = styled.div`
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;

    position: absolute;
    width: 363px;
    height: 137px;
    left: 1013px;
    top: 249.98px;

    filter: drop-shadow(0px 6px 10px rgba(101, 101, 101, 0.25));
`;
const Banner = () =>(
    <R17>
        <Logo />
        <Tip1><span>aaa</span></Tip1>
        <Tip1><span>bbb</span></Tip1>
    </R17>
);

export default Banner;