import React, { Component } from "react";
import "../css/community/community__topbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theme.css";

import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

class Recent extends Component {
  render() {
    const settings = {
      slide: "div", //슬라이드 되어야 할 태그 ex) div, li
      infinite: true, //무한 반복 옵션
      slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
      speed: 50, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay: true, // 자동 스크롤 사용 여부
      autoplaySpeed: 1000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, // 세로 방향 슬라이드 옵션
      adaptiveHeight: true,
      infinite: true,
      centerPadding: 30,
      spaceBetween: 30, // 슬라이드간 간격
    };
    return (
      <div>
        <div class="community__recent">
          <div class="community__recent--text">
            <span> Recent posts </span>{" "}
          </div>{" "}
          <Slider {...settings}>
            <div class="community_recent-whitebox--text">
              <h1>Making a design system from scratch</h1>{" "}
              <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div class="community_recent-whitebox--text">
              <h1>Good Job</h1> <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div class="community_recent-whitebox--text">
              <h1>Are you crazy?</h1> <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>

            <div class="community_recent-whitebox--text">
              <h1>Are you crazy?</h1> <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div class="community_recent-whitebox--text">
              <h1>Are you crazy?</h1> <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
            <div class="community_recent-whitebox--text">
              <h1>Are you crazy?</h1> <span>12 Feb 2020</span> <br />
              <br />
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </div>
          </Slider>
          {/* o 지금 문제 상황 박스가 하나로 돌아감 */}
        </div>
      </div>
    );
  }
}

export default Recent;
