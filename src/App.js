import React,{Component} from "react";
import Home from "./Routes/Home";
import Mypage from "./Routes/Mypage";
import Community from "./Routes/Community/Create";
import {HashRouter,Route,Routes} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <HashRouter>
        <Routes>
          <Route path="/" exact={true} element={<Mypage/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/my" element={<Mypage/>}/>
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
