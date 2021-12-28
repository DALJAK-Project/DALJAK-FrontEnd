import React, { Component } from "react";
import styled from "styled-components";
import "../../src/css/Home/home_header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/*링크 만들기*/
/*로그인시 아이콘에 마이페이지 링크*/
/*로그인시 삼항연산자 이용 user아이콘 노출*/
/*sign up페이지로 리디렉션*/
/*log in로그인 페이지로 리디렉션*/

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  color: ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
`;

const Text = styled(Link)`
  padding: 1vw 1vh;
  margin: 1vw 1vh;
  font-weight: bold;
  line-height: 1.3;
  font-size: 19px;
  background-color: ${(props) => "#ffffff" || "#8efcba"};
  text-decoration: none;
`;

function Nav() {
  // const homeMatch = useRouteMatch("/");
  // const daljakMatch = useRouteMatch("/daljak");
  // const myMatch = useRouteMatch("/my");
  // const commMatch = useRouteMatch("/community");
  return (
    <header className="home-header">
      <div className="inner">
        <div className="inner-left">
          <ul>
            <li className="inner-li">
              <Item>
                <Link to="/">
                  {/* 여기서 클릭할시 변경완료 근데 한번에 변한느게 문제 */}
                  Home
                </Link>
              </Item>
            </li>
            <li className="inner-li">
              <Item>
                <Link to="/daljak">다른달작</Link>
              </Item>
            </li>
            <li className="inner-li">
              <Item>
                <Link to="/my">내달작</Link>
              </Item>
            </li>
            <li className="inner-li">
              <Item>
                <Link to="/community">커뮤니티</Link>
              </Item>
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
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
