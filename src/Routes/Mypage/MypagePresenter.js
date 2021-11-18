import React from "react";
import {Header} from "./Components/Header";
import Profile from "./Components/Profile";
import Tab from "./Components/Tab";

function Mypage_Home_Presenter(){
    return( 
        <>
            <Header />
            <Profile 
                desc="안녕하세요~ 저는 현재 Frontend로 일하고 있습니다
                제 작품에 대한 질문은 언제든 환영입니다~!😊"
            />
            <Tab/>
        </>
    );
}
export default Mypage_Home_Presenter;