import React from "react";
import '../../../css/Mypage/header-bar.css';
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SLink=styled(Link)`
    display:block;
    textDecoration:none;
`;
const Head = () =>{
    return(
        <div class="header-bar__menu">
            <ul>
                <li><SLink to="/">Home</SLink></li>
                <li><SLink to="/other">다른달작</SLink></li>
                <li><SLink to="/my">내달작</SLink></li>
                <li><SLink to="/community">커뮤니티</SLink></li>
            </ul>
        </div>
    );
}
export function Header(){
    return(
        <div class="header-bar">
            <Head />
            <div class="header-bar__login">
                <div class="header-bar__signup">
                <div class="header-bar__signup--square"></div>
                <span class="header-bar__signup--text">Sign up</span>
                </div>
                <span class="header-bar__login--text">Log in</span>
                <div class="header-bar__login--profile">
                <i class="far fa-user-circle fa-2x"></i>
                </div>
            </div>
            <div class="header-bar__img">
                <img src={Logo} alt=""/>
            </div>
        </div>
    );
}
