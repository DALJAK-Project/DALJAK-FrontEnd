import React from "react";
import '../../../css/Mypage/profile.css';

const Profile=({desc})=>(
    <div class="profile">
        <div class="profile__text">
            <div class="profile__text--account">Account</div>
            <div class="profile__text--intro">
                {desc}
            </div>
        </div>
        <div class="profile__img">
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
        </div>
    </div>
)

export default Profile;