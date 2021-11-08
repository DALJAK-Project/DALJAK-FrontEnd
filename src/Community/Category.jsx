import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "../css/community/community__topbox.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../Community/Category";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "1",
      display: "none",
      category: { text: "it 자연 사회 인문 예체능 체육" },
    };
  }

  imgChangeLeft = () => {
    if (this.state.img > 2) {
      this.setState({
        img: 1,
      });
    } else {
      this.setState({
        img: this.state.img + 1,
      });
    }
  };

  buttonDisplayOn = () => {
    this.setState({
      display: "block",
    });
  };
  buttonDisplayOff = () => {
    this.setState({
      display: "none",
    });
  };
  //   componentDidMount() {
  //     setInterval(this.imgChangeLeft, 5000);
  //   }
  get content() {
    if (this.state.img === "1") {
    }
  }
  render() {
    return (
      <div class="community__box--category">
        <div class="community__box--category--text--a">
          <div>
            {" "}
            <span>it</span>
            <span>자연</span>
            <span>사회</span>
            <span>인문</span>
            <span>예체능</span>
            <span>체육</span>{" "}
          </div>
        </div>
        <button
          className="community__box--category--icon"
          onClick={this.imgChangeLeft}
          //   style={{ display: this.state.display }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}

export default Category;
