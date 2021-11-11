import React from "react";
import '../../../css/Home/header-bar.css';

export function Header (){
    return(
        <nav class="header-bar">
            <div class="header-bar__menu">
                <ul>
                    <li>Home</li>
                    <li>다른달작</li>
                    <li>내달작</li>
                    <li>커뮤니티</li>
                </ul>
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
        </nav>
    );
}