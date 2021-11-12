import React, { Component } from "react";
import Box from "../Community/Box";
import Posts from "../Community/Posts";
import Recent from "../Community/Recent";
import Search from "../Community/Search";
import Nav from "../components/Nav";
import "../css/community/community__topbox.css";
import axios from "axios";

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
      // content_a = [
      //   {
      //     id: "1", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "1", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "1", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   }
      // ],
      // content_b = [
      //   {
      //     id: "2", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "2", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "2", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   }
      // ],
      // content_c = [
      //   {
      //     id: "3", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "3", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   },
      //   {
      //     id: "3", tilte: "hello", date: "2021/11/4", desc: "abdsd",
      //   }
      // ],
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
