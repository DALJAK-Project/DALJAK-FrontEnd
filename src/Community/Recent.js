import React, { Component } from "react";
import "../css/community/community__topbox.css";

class Recent extends Component {
  render() {
    return (
      <div>
        <div class="community__recent">
          <div class="community__recent--text">
            <span> Recent posts </span>{" "}
          </div>{" "}
          <div class="community__recent--whitebox">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Recent;
