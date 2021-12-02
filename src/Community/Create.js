import react, { Component, useState } from "react";
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

const Dropdown_box = styled.div`
  display: ${(props) => (props.isToggle === "false" ? "none" : "block")};
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.sign === "+" ? "none" : "block")};
`;

function Create() {
  const [index, setindex] = useState("xx");

  const [viewContent, setViewContent] = useState([]);
  const [inputContent, setInputContent] = useState({
    title: "",
    tag: "",
    content: "",
  });

  const onChange = (e) => setInputContent(e.target.value);

  const onSumbit = (e) => {
    setViewContent(viewContent.concat({ ...inputContent }));
  };

  const onSelect = (e) => {
    setindex(e.target.value);
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputContent({
      ...inputContent,
      [name]: value,
    });
    console.log(inputContent);
  };
  return (
    <div>
      <Nav> </Nav>{" "}
      <div class="community-create">
        <h1 class="community-create__text"> 커뮤니티 글쓰기 </h1>{" "}
        <div class="community-create__box">
          <form class="community-create__form" action="" onSubmit={onSumbit}>
            {/* 폼 class이름을 변경 */}
            <p>
              <input
                //   onSubmit={function (e) {
                //     e.prventDefault();
                //     alert("섭밑!!");
                //     this.props;
                //   }}
                className="community-create__input"
                type="text"
                name="title"
                onChange={getValue}
                // onchange돌릴때 이 value 값을 남기도록

                placeholder="제목"
              />
            </p>{" "}
            {/* 이거 두개를 따로 만들어야한다 */}
            <p>
              {/* o 왜 같이 입력값이 나올까 */}
              <input
                //   onSubmit={function (e) {
                //     e.prventDefault();
                //     alert("섭밑!!");
                //     this.props;
                //   }}
                class="community-create__input"
                type="text"
                name="tag"
                onChange={getValue}
                id=""
                placeholder="태그"
                // onChange={onChange}
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
                <select
                  //   onSubmit={function (e) {
                  //     e.prventDefault();
                  //     alert("섭밑!!");
                  //     this.props;
                  //   }}

                  type="button"
                  class="community-create__input"
                  placeholder="학과명"
                  onChange={onSelect}
                  value={index}
                >
                  <option value="xx">과를 선택해주세요</option>
                  <option value="0">it융합</option>
                  <option value="1">자연과학</option>
                  <option value="2">인문</option>
                  <option value="3">예체능 </option>
                </select>{" "}
              </div>{" "}
              {/* 메뉴박스들 */} {/* 무슨태그로..? */}{" "}
              {/* <DropdownMenu sign={this.state.dropdown}>
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
              </DropdownMenu>{" "} */}
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
                setInputContent({
                  ...inputContent,
                  content: data,
                });
                console.log(inputContent);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />{" "}
            <button className="community-create__submit-button"></button>
          </form>{" "}
          {viewContent.map((element) => (
            <div>
              <h2>{element.title}</h2>
              <div>{element.content}</div>
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Create;
