import React from "react";
import '../../../css/Mypage/header-bar.css';
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";
/*<Router>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/other">다른달작</Link></li>
                <li><Link to = "/my">내달작</Link></li>
                <li><Link to = "/community">커뮤니티</Link></li>
                </Router>*/
export function Header(){
    return(
        <div class="header-bar">
            <div class="header-bar__menu">
                
            </div>
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
