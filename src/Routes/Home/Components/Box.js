import React from "react";
import styled from "styled-components";
import "../../../css/Home/home-box.css";
import logo from "../../../public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Blue = ({ title, desc }) => (
  <div class="home-box__review--blue">
    <div class="home-box__review--blue--main">
      <span class="home-box__review--blue__title">{title}</span>
      <span class="home-box__review--blue__desc">{desc}</span>
    </div>
  </div>
);
const Orange = ({ title, desc }) => (
  <div class="home-box__review--orange">
    <div class="home-box__review--orange--main">
      <span class="home-box__review--blue__title">{title}</span>
      <span class="home-box__review--blue__desc">{desc}</span>
    </div>
  </div>
);
const Purple = ({ title, desc }) => (
  <div class="home-box__review--purple">
    <div class="home-box__review--purple--main">
      <span class="home-box__review--blue__title">{title}</span>
      <span class="home-box__review--blue__desc">{desc}</span>
    </div>
  </div>
);
const A=styled.a`
  text-decoration:none;
`;
export function Box() {
  return (
    <div class="home-box">
      <div class="home-box__logo">
        <div class="home-box__img">
          <A href="/"><img src={logo} className="logoImage" alt="iPhone_01" /></A>
        </div>
        <div class="home_accessories"></div>
      </div>
      <div class="home-box__right">
        <div class="home-box__review">
          <Blue
            title="보람찬 대학생활의 마무리"
            desc="여기에 졸업작품을 올리고 누군가한테 도움을 줌으로서 진정한 대학 생활의 보람찬 마무리를 할수 있게 되었습니다"
          />
          <Orange
            title="감사합니다ㅠㅜ"
            desc="여기에 올린 웹사이트로 누구한테 도움을 주게 되었고 진정으로 보람찬 대학생활로 마무리 지을수 있게되었습니다"
          />
          <Purple
            title="감동을 주는 웹사이트!"
            desc="종일 밤새도 겨우 학교에 제출할수 있는거 밖에 없었는데 너무 좋았습니다"
          />
          <div class="home-box__review--white">
            <div class="home-box__review--white--main">
              <div class="home-box__review--white--titlebox">
                <div class="home-box__review--blue__title">후기 게시 등록</div>
                <div>
                  <A href="">
                    <div class="Account-overview__title">
                      <FontAwesomeIcon icon={faPlusCircle}/>
                      
                    </div>
                  </A>
                </div>
              </div>
              <span class="home-box__review--blue__desc">
                여러분의 달작 이용 후기를 작성해주세요!
              </span>
            </div>
          </div>
        </div>

        <div class="home-box__dot">
          <p class="v10"></p>
          <p class="v10"></p>
          <p class="v10"></p>
        </div>
      </div>
    </div>
  );
}
