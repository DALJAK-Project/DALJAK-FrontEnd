import React from "react";
import "../css/Home/header-bar.css";
// import '../css/Home/home-box.css';
// import '../css/Home/header-accessories.css';
// import '../css/Home/header-cardbox.css';
import "../css/Daljak/daljak_home.css";
// import '../css/Home/font.css';
import "../css/Daljak/all.css";



import {Daljak_Center} from './DaljakComponents';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Daljak() {
  const imgITList = [
    "Rectangle-a.png",
    "Rectangle-b.png",
    "Rectangle-c.png",
    "Rectangle-d.png",
    "Rectangle-e.png",
  ];
  const imgNSList = [
    "card-a.png",
    "card-b.png",
    "card-b.png",
    "card-c.png",
    "card-d.png",
    "Rectangle-c.png",
  ];
  const imgACTList = [
    "act-a.png",
    "act-a.png",
    "act-a.png",
    "act-b.png",
    "act-c.png",
    "act-d.png",
    "act-d.png",
    "act-d.png",
    "act-e.png",
  ];
  const moreImg = [
    "more-a.png",
    "more-b.png",
    "more-c.png",
    "more-d.png",
    "more-e.png",
    "more-f.png",
  ];
  const todayImg = [
    "small-a.png",
    "small-b.png",
    "small-c.png",
    "small-d.png",
    "small-e.png",
  ];
  return (
    <div>
      <Nav />

      <div className="daljak__box">
        <Daljak_Center 
        key="it" title="IT" 
        images={imgITList} 
        boxName="it" 
        showSlide={5}/>
        <Daljak_Center
          key="science"
          title="자연과학"
          images={imgNSList}
          boxName="science"
          showSlide={5}
        />
        <Daljak_Center
          key="act"
          title="예체능"
          images={imgACTList}
          boxName="act"
          showSlide={7}
        />
        <Daljak_Catagory key="categoty" images={moreImg} />
        <DaljakToday key="today" images={todayImg} />
      </div>
    </div>
  );
}

function Daljak_Catagory({ images }) {
  const cardlist = images.map((imgUrl, index) => (
    <div key={`categoryCardImg${index}`}>
      <img src={require(`../img/${imgUrl}`).default} alt=" " />
    </div>
  ));
  return (
    <div className="daljak__category">
      <div className="daljak__category--box ">
        <div className="daljak__box--category ">
          <div className="daljak__box--it--text--category">
            <span className="daljak__box--it--title ">More categories</span>
          </div>
          <div className="daljak__box--cardlist--grid">{cardlist}</div>
        </div>
      </div>
    </div>
  );
}

function DaljakToday({ images }) {
  const component = images.map((imgUrl, index) => (
    <DaljakTodayComponent
      key={`today${index}`}
      imgUrl={imgUrl}
      title="Et omnis aut id"
      date="2021/3/30"
      desc="Et omnis aut id. Aut eaque est quaerat. Doloribus omnis fugit et sit ducimus expedita."
    />
  ));
  return (
    <div className=" daljak__category ">
      <div className=" daljak__category--box--today ">
        <div className=" daljak__box--it ">
          <div>
            <span className=" daljak__box--it--title ">
              오늘의{" "}
              <span style={{ backgroundColor: "rgba(129, 106, 254, 1)" }}>
                인기작
              </span>
            </span>
          </div>
          {component}

          {/* <div className=" daljak__deco--bottom ">
                        <img src=" ../img/deco-b.png " alt=" " />
                    </div> */}
        </div>
      </div>
    </div>
  );
}
function DaljakTodayComponent({ imgUrl, title, date, desc }) {
  return (
    <div className=" daljak__box--cardlist--card--today ">
      <div>
        <img src={require(`../img/${imgUrl}`).default} alt=" " />
      </div>

      <div className=" daljak__box--cardlist--card--today--textbox ">
        <div className=" daljak__box--cardlist--card--today--text ">
          <div className=" daljak__box--cardlist--card--today--title ">
            {title}
          </div>
          <div className=" daljak__box--cardlist--card--today--date ">
            {date}
          </div>
        </div>

        <span className=" daljak__box--cardlist--card--today--desc ">
          {desc}
        </span>
      </div>
    </div>
  );
}
function Nav() {
  return (
    <div>
      <nav className="header-bar">
        <div className="header-bar__menu">
          <ul>
            <li>Home</li>
            <li>다른달작</li>
            <li>내달작</li>
            <li>커뮤니티</li>
          </ul>
        </div>
        <div className="header-bar__login">
          <div className="header-bar__signup">
            <div className="header-bar__signup--square"></div>
            <span className="header-bar__signup--text">Sign up</span>
          </div>
          <span className="header-bar__login--text">Log in</span>
          <div className="header-bar__login--profile">
            <i className="far fa-user-circle fa-2x"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
