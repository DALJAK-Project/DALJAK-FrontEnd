import React, { Component } from "react";
import "../css/community/community__topbox.css";

class Posts extends Component {
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
    return (
      <div class="community__posts">
        <div class="community__posts__title"> Featured posts </div>
        {cards}
      </div>
    );
  }
}

export default Posts;
