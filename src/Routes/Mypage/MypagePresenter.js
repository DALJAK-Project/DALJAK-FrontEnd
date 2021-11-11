import React from "react";
import {Header} from "./Components/Header";
import {Profile} from "./Components/Profile";
import {Tab} from "./Components/Tab";

export function Mypage_Home_Presenter(){
    return( 
        <>
            <Header />
            <Profile/>
            <Tab/>
        </>
    );
}