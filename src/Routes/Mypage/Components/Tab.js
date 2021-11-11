import React from "react";
import '../../../css/Mypage/tab.css';

export function Tab(){
    return(
        <div class="tab-wrap">
        <ul class="tab">
            <li class="tab__list"><i class="fas fa-home"></i> Account Overflow</li>
            <li class="tab__list"><i class="fas fa-edit"></i> Edit Post</li>
            <li class="tab__list"><i class="fas fa-bookmark"></i> Bookmark</li>
            <li class="tab__list"><i class="far fa-edit"></i> Edit Profile</li>
            <li class="tab__list"><i class="fas fa-lock"></i> Change Password</li>
        </ul>
        <div class="tab-content">
            <div class="Account-overview">
            <div class="Account-overview__title">Account overflow</div>
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
        </div>
    );
}