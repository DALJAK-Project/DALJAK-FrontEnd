import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "../css/Daljak/daljak_home.css";
//width: 1300px;
export const Styled_Slide = styled(Slider)`
  .slick-list {
    //얘로 크기조정 했음
    margin: 0 auto;
    width: ${(props) => props.width || "1300px"};
  }
  .slick-prev,
  .slick-next {
    top: 90px;
  }

  .slick-prev {
    left: 50px;
  }
  .slick-next {
    right: 50px;
  }
  .slick-prev:before,
  .slick-next:before {
    //얘는 양옆 버튼. 커스텀 해줘야 보임
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;

    color: #000000;
    -webkit-font-smoothing: antialiased;
  }
`;
const SimpleSlider = ({ title, images, showSlide }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: showSlide,
    slidesToScroll: 1,
  };

  const cards = images.map((imgUrl, index) => (
    <div className="daljak__box--cardlist--card" key={`centerCardImg${index}`}>
      <img src={require(`../img/${imgUrl}`).default} alt="" />
    </div>
  ));
  return (
    <Styled_Slide {...settings} width={`${showSlide * 300}px`}>
      {cards}
    </Styled_Slide>
  );
};

export default SimpleSlider;
