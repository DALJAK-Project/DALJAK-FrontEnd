import react, { Component } from "react";
import styled from "styled-components";

class Dropdown extends Component {
  // 이렇게 하면 안되고 클릭할시 반복문으로 title값만 돌림
  // 일단 반복문으로 배열안에 있는 값들만 모두 출력해보자
  // 오케이 이렇게 하면 당장은 버튼값이 증가한다 그에 맞는 버튼값을 활성화시킬수있는법은?
  // 클릭이벤트 발생하면 안보이게

  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <div key={data[i].id}>
          <div
            data={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeDropdwon(e.target.dataset.id);
            }.bind(this)}
            class="community-create-menu"
          >
            {data[i].title}
          </div>
        </div>
      );
      i = i + 1;
    }
    return <div>{lists}</div>;
  }
}
export default Dropdown;
