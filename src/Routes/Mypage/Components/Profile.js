import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faEdit,faBookmark,faLock} from "@fortawesome/free-solid-svg-icons";
import '../../../css/Mypage/profile.css';

const Profile=({desc,img})=>(
    <div class="profile">
        <div class="profile__text">
            <div class="profile__text--account">Account</div>
            <div class="profile__text--intro">
                {desc}
            </div>
        </div>
        <div class="profile__img">
            <img src={img} alt=""/>
        </div>
    </div>
)

export default Profile;