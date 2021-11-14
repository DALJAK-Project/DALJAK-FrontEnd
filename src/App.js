import React,{Component} from "react";
import {HomePresenter} from "./Routes/Home/HomePresenter";
import {Mypage_Home_Presenter} from "./Routes/Mypage/MypagePresenter";
import {Header} from "./Routes/Home/Components/Header";
class App extends Component{
  render(){
    return(
      <Mypage_Home_Presenter/>
    );
  }
}

export default App;
