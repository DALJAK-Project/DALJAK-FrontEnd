import React, { Component } from "react";
import Box from "../Community/Box";
import Posts from "../Community/Posts";
import Recent from "../Community/Recent";
import Search from "../Community/Search";
import Nav from "../components/Nav";
import "../css/community/community__topbox.css";

class Community extends Component {
  render() {
    const img = ["act-a.png", "act-b.png", "act-c.png"];
    return (
      <div className="App">
        <Nav></Nav>
        <Box></Box>
        <Recent></Recent>
        <Search title="HTML" desc="HTML is HyperText Markup Language."></Search>
        <Posts images={img}></Posts>
      </div>
    );
  }
}

export default Community;
