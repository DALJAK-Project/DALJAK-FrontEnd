import React from "react";
import '../../../css/Mypage/tab.css';
import {Account} from "../Components/Account";
import {Edit} from "../Components/Edit"; 
import {Bookmark} from "../Components/Bookmark";

export function Tab(){
    return(
        <div class="tab-wrap">
            <ul class="tab">
                <li class="tab__list"><i class="fas fa-home"></i> Account Overview</li>
                <li class="tab__list"><i class="fas fa-edit"></i> Edit Post</li>
                <li class="tab__list"><i class="fas fa-bookmark"></i> Bookmark</li>
                <li class="tab__list"><i class="far fa-edit"></i> Edit Profile</li>
                <li class="tab__list"><i class="fas fa-lock"></i> Change Password</li>
            </ul>
            <Bookmark />
        </div>
    );
}