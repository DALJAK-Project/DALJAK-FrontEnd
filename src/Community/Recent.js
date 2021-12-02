import React, { Component } from "react";
import "../css/community/community__topbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theme.css";

import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

// state를 업데이트시킬때마다 이미지 이동

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
    };
  }
  render() {
    const MAX_SLIDES = 3;
    const handleBannerRight = () => {
      if (this.state.slide >= MAX_SLIDES) {
        this.setState({
          slide: 0,
        });
        // 3보다 클경우 0으로 돌아간다
      } else {
        this.setState({
          slide: this.state.slide + 1,
        });
      }
    };
    const handleBannerLeft = () => {
      if (this.state.slide === 0) {
        this.setState({
          slide: MAX_SLIDES,
        });
        // slideState가 0이되면 최대 갯수(마지막이미지를 위해) MAX_SLIDES로 state를 업데이트 한다.
      } else {
        this.setState({
          slide: this.state.slide - 1,
        });
        // 클릭할때마다 1씩 감소
      }
    };
    return (
      <div class="community__recent">
        <div class="community__recent--text">
          <span> Recent posts </span>{" "}
        </div>{" "}
        <div class="community__recent-box">
          <div class="community__recent-whitebox">
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
            {/* o 지금 문제 상황 박스가 하나로 돌아감 */}
          </div>
          <FontAwesomeIcon
            onClick={handleBannerRight}
            icon={faChevronRight}
            size="3x"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}

export default Recent;
