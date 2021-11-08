import React, { Component } from "react";
import Box from "../Community/Box";
import Posts from "../Community/Posts";
import Recent from "../Community/Recent";
import Search from "../Community/Search";
import Nav from "../components/Nav";
import "../css/community/community__topbox.css";
import axios from "axios";

class Community extends Component {
  render() {
    const img_block = ["act-a.png", "act-b.png", "act-c.png"];
    const img_none = ["card-a.png", "card-b.png", "card-c.png"];
    return (
      <div className="App">
        <div>
          <Nav></Nav>
          <Box></Box>
          <Recent></Recent>
          <Search
            title="HTML"
            desc="HTML is HyperText Markup Language."
          ></Search>
          <Posts images={img_block} images_none={img_none}></Posts>
        </div>
      </div>
    );
  }
}

export default Community;
