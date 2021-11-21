import react, { Component } from "react";
import community_crate from "../css/community/community_create.css";
import Nav from "../components/Nav";
// NOTE: Use the editor from source (not a build)!
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Subject from "./Subject";

// 여기서 일단 fontawsome import 시키고
// 자 여기서 부터 create 값을 입력받을시 e객체로 target값들 콘솔에다가 입력시켜보자

// 입력받을시 e.target.value값 받아와보자

const Dropdown_box = styled.div`
  display: ${(props) => (props.isToggle === "false" ? "none" : "block")};
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.sign === "+" ? "none" : "block")};
`;

// 버튼에다가 onchange만들어줘서 이쪽 메뉴에다가 클릭이벤트 mode = 로직을 클릭한 로직으로
// 나 뭐하고 있었지...? 아 그래서 mode를 바꾸면 그 입력한 글자 그대로 가기로 한거지?

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_num: 1,
      contents: { title: "", contents: "" },
      dropdown: "+",
      // 여기서 다운기호 쓰려면 어떻게 해야하지??
      mode: "category",
      menu: [
        { id: 1, title: "it" },
        { id: 2, title: "인문" },
        { id: 3, title: "자연" },
        { id: 4, title: "예체능" },
      ],
      isToggleOn: "true",
    };
  }

  // 그럼 꼭 다 만들어가야하나..?

  // 로직: 한개를 클릭했을때 mode값이 그대로 바뀜
  DropdownClickHandler(event) {
    // 클릭했을때
    this.setState((state) => ({
      dropdown: state.dropdown === "+" ? "-" : "+",
      isToggleOn: "true",
    }));
  }
  // i가 3보다 작을경우 배열을 반복해서 id값과 맞춤
  render() {
    // var i = 0;
    // var title = null;
    // while(i<4) {
    //   var data = this.state.menu[i];
    //   if()
    //   // data안에 배열과 아이디값이 똑같을경우
    // }
    var _title = null;
    var i = 0;
    while (i < this.state.menu.length) {
      var data = this.state.menu[i];
      if (data.id === this.state.category_num) {
        _title = data.title;
      }
      i = i + 1;
    }

    return (
      <div>
        <Nav> </Nav>{" "}
        <div class="community-create">
          <h1 class="community-create__text"> 커뮤니티 글쓰기 </h1>{" "}
          <div class="community-create__box">
            <form class="community-create__form" action="" method="post">
              <p>
                <input
                  //   onSubmit={function (e) {
                  //     e.prventDefault();
                  //     alert("섭밑!!");
                  //     this.props;
                  //   }}
                  class="community-create__input"
                  type="text"
                  name="title"
                  id=""
                  placeholder="제목"
                />
              </p>{" "}
              <p>
                <input
                  //   onSubmit={function (e) {
                  //     e.prventDefault();
                  //     alert("섭밑!!");
                  //     this.props;
                  //   }}
                  class="community-create__input"
                  type="text"
                  name="title"
                  id=""
                  placeholder="태그"
                />
              </p>{" "}
              {/* 여기서 로직: 만약 바뀐 모드가 state모드값과 같다면 ttile값 출력 */}{" "}
              <p>
                <input
                  type="file"
                  id="chooseFile"
                  name="chooseFile"
                  accept="image/*"
                  onchange="loadFile(this)"
                />{" "}
              </p>{" "}
              {/* 그럼여기서 이거를 on submit했을때 target값을 받아와야해 */}{" "}
              {/* 머리가 하얗다..  */}{" "}
              <p class="community-create__p">
                <div>
                  <button
                    //   onSubmit={function (e) {
                    //     e.prventDefault();
                    //     alert("섭밑!!");
                    //     this.props;
                    //   }}
                    type="button"
                    class="community-create__input"
                    placeholder="학과명"
                    onClick={this.DropdownClickHandler.bind(this)}
                  >
                    {_title} {/* 이거의 타이틀만 바꾸면되는데 */}{" "}
                  </button>{" "}
                  {/* 클릭하면 안보이게 => state값이 1보다 크면 display none으로  */}{" "}
                  {this.state.dropdown}{" "}
                </div>{" "}
                {/* 메뉴박스들 */} {/* 무슨태그로..? */}{" "}
                <DropdownMenu sign={this.state.dropdown}>
                  <Dropdown_box isToggle={this.state.isToggleOn}>
                    <Dropdown
                      data={this.state.menu}
                      onChangeDropdwon={function (id) {
                        this.setState({
                          category_num: Number(id),
                          isToggleOn:
                            this.state.isToggleOn === "true" ? "false" : "true",
                          dropdown: "+",
                        });
                        // 클릭하면 display none으로
                      }.bind(this)}
                    ></Dropdown>{" "}
                  </Dropdown_box>{" "}
                </DropdownMenu>{" "}
              </p>{" "}
              {/* 클릭했을때 카테고리 이름 변경되게끔 */}{" "}
              {/* h 여기다 드롭다운 만들것이다 */}{" "}
              {/* onclick -> display block 이였던게 보이게끔 */}{" "}
              {/* 로직은 아코디언이랑 비슷 ] */}{" "}
              {/* 아코디언 로직 -> + -로 변하면서 밑에있던것들이 보인다 */}{" "}
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />{" "}
            </form>{" "}
          </div>{" "}
          <Subject title="제목" desc="부제목"></Subject>
        </div>{" "}
      </div>
    );
    //   잴 먼저 해야할것 form을 만들자
    // onsubmit했을때 받을것들
  }
}

export default Create;
