import React from "react";
import styled from "styled-components";

const Language=styled.div`
    width: 32px;
    height: 19px;
    left: 1060px;
`;
const Ico_chevron=styled.iframe`
    position: absolute;
    width: 12px;
    height: 12px;
    left: 1295px;
    top: 45.98px;
`;
const CheckButton=styled.menu`
    position: absolute;
    left: 16.67%;
    right: 16.67%;
    top: 25%;
    bottom: 25%;

    background: #FFFFFF;
`;
const LangText=styled.span`
    position: absolute;
    width: 19px;
    height: 19px;
    left: 1275px;
    top: 43.98px;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */


    color: #FFFFFF;
`;
const R21 = styled.div`
    position: relative;
    width: 1440px;
    height: 105px;
    left: 0px;
    top: 0px;
    display:flex;
    align-items:center;
    background: #585858;
`;
const Menu = styled.ul`
    position:absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: 0px;

    width: 415px;
    height: 25px;
    left: 450px;
`;
const MenuDetail = styled.span`
    /* 커뮤니티 */


    position: static;
    
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    display:inline-block;
    /* identical to box height */


    color: #FFFFFF;


    /* Inside Auto Layout */

    flex: none;
    order: 3;
    flex-grow: 0;
`;
const Log=styled.div`
    position: absolute;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 150px;
    height: 35px;
    left: 1060px;
    radius:4px;
`;
const Login=styled.span`
    width: 45px;
    height: 20px;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */


    color: #FFFFFF;
`;

const Group=styled.div`
    width: 74px;
    height: 32px;
    left: 1060px;
    top: 36px;
    radius:4px;
    
`;

const Signup=styled.span`
    width: 74px;
    position:relative;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    display:table-cell;
    text-align:center;
    z-index=1;
    color: #816AFE;
`;
const R=styled.div`
    position:absolute;
    width: 74px;
    height: 32px;

    background: #FFFFFF;
    border-radius: 4px;
    z-index=0;
`;

const UpSection = () =>(
    <>
        <R21 >
            <Menu>
                <MenuDetail>Home</MenuDetail>
                <MenuDetail>내 달작</MenuDetail>
                <MenuDetail>다른 달작</MenuDetail>
                <MenuDetail>커뮤니티</MenuDetail>
            </Menu>
            <Log>
                <Group>
                    <R />
                    <Signup>Sign up</Signup>                    
                </Group>
                <Login>Log in</Login>
            </Log>
            <Language>
                <Ico_chevron>
                    <CheckButton />
                </Ico_chevron>
                <LangText>EN</LangText>
            </Language>
        </R21>
        
    </>
);

export default UpSection;