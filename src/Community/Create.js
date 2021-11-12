import react, { Component } from "react";
import community_crate from "../css/community/community_create.css";
import Nav from "../components/Nav";
// NOTE: Use the editor from source (not a build)!
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// 자 여기서 부터 create 값을 입력받을시 e객체로 target값들 콘솔에다가 입력시켜보자

// 입력받을시 e.target.value값 받아와보자

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: { title: "", contents: "" },
    };
  }

  render() {
    const getValue = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
    };
    return (
      <div>
        <Nav></Nav>
        <div class="community-create">
          <h1 class="community-create__text">커뮤니티 글쓰기</h1>
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
              />
            </p>
            {/* 그럼여기서 이거를 on submit했을때 target값을 받아와야해 */}
            {/* 머리가 하얗다..  */}
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
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
            />
          </form>
        </div>
      </div>
    );
    //   잴 먼저 해야할것 form을 만들자
    //
  }
}

export default Create;
