import React from "react";
import '../../../css/Mypage/profile.css';

export function Profile(){
    return(
        <div class="profile">
            <div class="profile__text">
                <div class="profile__text--account">Account</div>
                <div class="profile__text--intro">
                안녕하세요~ 저는 현재 Frontend로 일하고 있습니다<br />
                제 작품에 대한 질문은 언제든 환영입니다~!😊
                </div>
            </div>
            <div class="profile__img">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
            </div>
        </div>
    );
}