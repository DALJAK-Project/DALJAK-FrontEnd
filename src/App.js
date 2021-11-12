import React, { Component } from "react";
import Community from "./Community/Community";
import Create from "./Community/Create";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Community></Community> */}
        <Create></Create>
      </div>
      // route가 뭔가를 감싸야한다는데 뭔진 잘 모르겠다
      // 아무것도 뜨지를 않는다
      // o 라우터가 지금 안나와 이게 뭐가 문제인진 모르겠는데
    );
  }
}

export default App;
