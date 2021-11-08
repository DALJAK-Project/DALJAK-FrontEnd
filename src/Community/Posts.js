import React, { Component } from "react";
import "../css/community/community__topbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: "+",
    };
  }
  buttonClickHandler(event) {
    this.setState((state) => ({
      buttonValue: state.buttonValue === "+" ? "-" : "+",
    }));
  }
  render() {
    const cards = this.props.images.map((imgUrl) => (
      <div>
        <div class="community__posts__cardlist">
          <img src={require(`../img/${imgUrl}`).default} alt="" />
          <div class="community__posts__card--text">
            <span> Designing Dashboards </span> <br />
            <span> 2021.11.4 </span> <br />
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    ));

    const cards_none = this.props.images_none.map((imgUrl) => (
      <div>
        <div class="community__posts__cardlist">
          <img src={require(`../img/${imgUrl}`).default} alt="" />
          <div class="community__posts__card--text">
            <span> Designing Dashboards </span> <br />
            <span> 2021.11.4 </span> <br />
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    ));

    return (
      <div class="community__posts">
        <div class="community__posts__title">
          <span>Featured posts</span>
          {/* <FontAwesomeIcon icon={faPlusSquare} size="2x" /> */}
          <button
            class="community__posts__plus"
            onClick={this.buttonClickHandler.bind(this)}
          >
            {this.state.buttonValue}
          </button>
        </div>
        {cards}
        <div
          className={
            this.state.buttonValue === "+"
              ? "none-content"
              : "accordion-content"
          }
        >
          {cards_none}
        </div>
      </div>
    );
  }
}

export default Posts;
