import React, { Component } from "react";
import "../css/community/community__topbox.css";

class Box extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="community__topbox">
            <span>
              함께 펼쳐가는 <br />
              커뮤니티 게시판
            </span>
            <br />
            <br />
            <span>당신에게 필요한 졸업작품을 매칭해보세요!</span>
          </div>
        </div>
        <div class="community__box--button">
          <button>Write a post now</button>
        </div>
        <div class="community__box--categorty"></div>
      </div>
    );
  }
}

export default Box;
