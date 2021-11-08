import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "../css/community/community__topbox.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Category from "../Community/Category";

class Box extends Component {
  render() {
    const categoryList = ["it", "자연", "사회", "인문", "예체능", "체육"];
    const categoryList__b = [
      "ds",
      "자sd연",
      "사회ds",
      "인sd문",
      "예sd체능",
      "체육",
    ];
    const categoryList__c = [
      "ds",
      "자sdsdasds연",
      "사회sdsd ds",
      "인sdsd문",
      "예sds체능",
      "체육",
    ];
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
        <Category
          category={categoryList}
          category__b={categoryList__b}
          category__c={categoryList__c}
        />
      </div>
    );
  }
}

export default Box;
