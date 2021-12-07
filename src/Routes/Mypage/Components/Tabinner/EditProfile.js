import React from "react";
import '../../../../css/Mypage/account.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

export function EditProfile({nickName,Email,firstName,lastName}){
    return(
        <div class="tab-content">
            <div class="Account-overview">
                <div class="Account-overview__title"><FontAwesomeIcon icon={faEdit}/>Account overview</div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Username</div>
                    <div class="Account-overview__cnt-input">{nickName}</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Email</div>
                    <div class="Account-overview__cnt-input">{Email}</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">First name</div>
                    <div class="Account-overview__cnt-input">{firstName}</div>
                </div>
                <div class="Account-overview__cnt">
                    <div class="Account-overview__cnt-title">Last name</div>
                    <div class="Account-overview__cnt-input">{lastName}</div>
                </div>
            </div>
        </div>
    );
}