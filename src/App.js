import React,{Component} from "react";
import Home from "./Routes/Home";
import Mypage from "./Routes/Mypage";
import {Header} from "./Routes/Home/Components/Header";
import {BrowserRouter,Route,Routes} from "react-router-dom";
/*class App extends Component{
  render(){
    return(
      <Routes>
        <Route path="/" exact="true" component={HomePresenter}/>
        <Route path="/my" component={Mypage_Home_Presenter}/>
      </Routes>
    );
  }
}*/

class App extends Component{
  render(){
    return(
      <Mypage />
      /* 라우터.... help
      <Mypage/>
      */
    );
  }
}
export default App;
