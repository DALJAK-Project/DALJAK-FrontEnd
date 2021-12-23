// slider React Slick
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Daljak_Center({ title, images, showSlide }) {
    const cards = images.map((imgUrl, index) => (
      <div className="daljak__box--cardlist--card" key={`centerCardImg${index}`}>
        <img src={require(`../../img/${imgUrl}`).default} alt="" />
      </div>
    ));
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: showSlide,
      slidesToScroll: 1,
    };
    const BoxStyle = {
        width: `${250 * showSlide + 30}px`
    }
    return (
      <div className="daljak__center">
        <div className="daljak__box__container">
          <div className="daljak__box--text">
            <span className="daljak__box--title">{title}</span>
            <span className="daljak__box--desc">전체보기</span>
          </div>
         
          <div style={BoxStyle}>
          {/* <FontAwesomeIcon
              icon={faChevronCircleLeft}
              style={{ color: "#816afe" }}
            /> */}
            <Slider {...settings}>{cards}</Slider>
            {/* <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={{ color: "#816afe" }}
            /> */}
          </div>
          
        </div>
      </div>
    );
  }
export default Daljak_Center
