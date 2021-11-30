import React, { Component } from "react";
import "../css/Home/header-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
/*링크 만들기*/
/*로그인시 아이콘에 마이페이지 링크*/
/*로그인시 삼항연산자 이용 user아이콘 노출*/
/*sign up페이지로 리디렉션*/
/*log in로그인 페이지로 리디렉션*/
class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="header-bar">
          <div class="header-bar__menu">
            <ul>
            
              <li> Home </li> <li> 다른달작 </li> <li> 내달작 </li>{" "}
              <li> 커뮤니티 </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div class="header-bar__login">
            <div class="header-bar__signup">
              <div class="header-bar__signup--square"> </div>{" "}
              <span class="header-bar__signup--text"> Sign up </span>{" "}
            </div>{" "}
            <span class="header-bar__login--text"> Log in </span>{" "}
            <div class="header-bar__login--profile">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} size="2x" />{" "}
            </div>{" "}
          </div>{" "}
        </nav>{" "}
      </div>
    );
  }
}

export default Nav;
