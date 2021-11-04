import React, { Component } from "react";
import "../css/community/community__topbox.css";

class Recent extends Component {
  render() {
    return (
      <div class="community__recent">
        <div class="community__recent--text">
          <span> Recent posts </span>{" "}
        </div>{" "}
        <div class="community__recent--whitebox">
          <div class=""> </div> <div class=""> </div> <div class=""> </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Recent;
