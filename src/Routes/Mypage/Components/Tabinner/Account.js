import React from "react";
import '../../../../css/Mypage/account.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export function Account({nickName,Email,firstName,lastName}){
    return(
        <div class="tab-content">
            <div class="Account-overview">
                <div class="Account-overview__title"><FontAwesomeIcon icon={faHome}/>Account overview</div>
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
//text 길이중 가장긴것에 맞춰서 박스크기 조정
//최소크기는 현재꺼로
