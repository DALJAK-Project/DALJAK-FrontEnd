import react, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <article>
        <h2> {this.props.title} </h2>
        <h4> {this.props.desc}</h4>
      </article>
    );
  }
}

export default Subject;
