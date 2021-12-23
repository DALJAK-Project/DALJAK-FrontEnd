import React, { Component } from "react";
import Box from "./Box";
import Posts from "./Posts";
import Recent from "./Recent";
import Search from "./Search";
import Nav from "../components/Nav";
import "../css/community/community__topbox.css";
import axios from "axios";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }

  render() {
    const img_block = ["act-a.png", "act-b.png", "act-c.png"];
    const img_none = ["card-a.png", "card-b.png", "card-c.png"];
    return (
      <div className="App">
        <div>
          <Nav></Nav>
          <Box></Box>
          {/* <div>
            {this.state.content_a.map((section, index) => (
              <Recent
                key={section.key}
                title={section.title}
                desc={section.desc}
                date={section.date}
              ></Recent>
            ))}
          </div> */}
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
