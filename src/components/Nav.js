import React, { Component } from "react";
import styled from "styled-components";
import { Toolbar,Link } from "@mui/material";
import "../../src/css/Home/home_header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
/*링크 만들기*/
/*로그인시 아이콘에 마이페이지 링크*/
/*로그인시 삼항연산자 이용 user아이콘 노출*/
/*sign up페이지로 리디렉션*/
/*log in로그인 페이지로 리디렉션*/

const SLink=styled(Link)`
  margin-left: 50px;
  margin-right:50px;
  justify-content:center;
  align-items:center;
`;
class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
        searchTerm:"",
        loading:false,
        error:null
    };
  }
  handleSubmit=(event)=>{
      event.preventDefault();
      alert(event.message);
  }
  render() {
    return (
      <header className="home-header">
        <div className="inner">
          <div className="inner-left">
            <ul>
              <li className="inner-li">
                <a href="/" className="inner-a2">
                  Home
                </a>
              </li>
              <li className="inner-li">
                <a href="/other" className="inner-a">
                  다른달작
                </a>
              </li>
              <li className="inner-li">
                <a href="/my" className="inner-a">
                  내달작
                </a>
              </li>
              <li className="inner-li">
                <a href="/community" className="inner-a">
                  커뮤니티
                </a>
              </li>
            </ul>
          </div>
          <div class="inner-right">
            <ul class="inner-right-ul">
              <div className="user-thing">
                <ul className="user-ul">
                  <li className="inner2-li">
                    <a href="/signup" className="home__signup--square">
                      Sign up
                    </a>
                  </li>
                  <li className="inner-li">
                    <a href="/login" className="home__login">
                      Log in
                    </a>
                  </li>
                </ul>
              </div>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
        
      </header>
     
    );
  }
}

export default Nav;
/*

<div class="home-header">
        <header class="header-bar__menu">
          <ul>
              <SLink to="/"><li class="header_menu_first">Home</li></SLink>
              <SLink to="/other"><li class="header_menu_li">다른달작</li></SLink>
              <SLink to="/my"><li class="header_menu_li">내달작</li></SLink>
              <SLink to="/community"><li class="header_menu_li">커뮤니티</li></SLink>
          </ul>       
        </header>
        <div class="header-bar__login">
            <div>
              <div class="header-bar__signup--square">
                <form onClick={this.handleSubmit}>
                  <span class="header-bar__signup--text">Sign up</span>
                </form>
              </div>
              
            </div>
            <form onClick={this.handleSubmit}>
              <span class="header-bar__login--text"> Log in </span>
            </form>
            <div class="header-bar__login--profile">
              
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>
          </div> 
      </div>
*/