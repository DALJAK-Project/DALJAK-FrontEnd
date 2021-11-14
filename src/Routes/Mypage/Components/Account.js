import React from "react";
import '../../../css/Mypage/account.css';

export function Account(){
    return(
        <div class="tab-content">
            <div class="Account-overview">
                <div class="Account-overview__title">Account overview</div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Username</div>
                    <div class="Account-overview__cnt-input">hong1234</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Email</div>
                    <div class="Account-overview__cnt-input">hong1234@naver.com</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">First name</div>
                    <div class="Account-overview__cnt-input">길동</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Last name</div>
                    <div class="Account-overview__cnt-input">홍</div>
                </div>
                <div class="Account-overview__Edit-Btn">Edit Profile</div>
            </div>
        </div>
    );
}