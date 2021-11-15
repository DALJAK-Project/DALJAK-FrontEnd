import react, { Component } from "react";

class Dropdown extends Component {
  // 이렇게 하면 안되고 클릭할시 반복문으로 title값만 돌림
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    // 반복문으로 0 1 2 3 까지
    while (i < data.length) {
      lists.push(
        <div key={data[i].id}>
          <div
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
            class="community-create-menu"
          >
            {data[i].title}
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}
export default Dropdown;
