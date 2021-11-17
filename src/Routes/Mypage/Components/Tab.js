import React from "react";
import '../../../css/Mypage/tab.css';
import {Account} from "../Components/Account";
import {Edit} from "../Components/Edit"; 
import {Bookmark} from "../Components/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faEdit,faBookmark,faLock} from "@fortawesome/free-solid-svg-icons";
import { Profile } from "./Profile";

class Tab extends React.Component{
    state={
        mode:""
    };
    modeChange=(e)=>{
        this.setState({
            mode:this.props.mode
        });
    }
    render(){
        return(
            <div class="tab-wrap">
                <ul class="tab">
                    <li class="tab__list">
                        <button type="button" onClick={()=>{
                            this.setState({
                                mode:"Profile"
                            })
                        }}>
                            <FontAwesomeIcon icon={faHome} onClick={()=>{
                            this.setState({
                                mode:"Profile"
                            })
                        }}/> Account Overview
                        </button>
                    </li>
                    <li class="tab__list">
                        <button type="button"onClick={()=>{
                            this.setState({
                                mode:"Edit"
                            })
                        }}>
                            <FontAwesomeIcon icon={faEdit} /> Edit Post
                        </button>
                    </li>
                    <li class="tab__list">
                        <button type="button"onClick={()=>{
                            this.setState({
                                mode:"Bookmark"
                            })
                        }}>
                            <FontAwesomeIcon icon={faBookmark} /> Bookmark
                        </button>
                    </li>
                    <li class="tab__list">
                        <button type="button"onClick={()=>{
                            this.setState({
                                mode:"EditProfile"
                            })
                        }}>
                            <FontAwesomeIcon icon={faEdit} /> Edit Profile
                        </button>
                    </li>
                    <li class="tab__list">
                        <button type="button"onClick={()=>{
                            this.setState({
                                mode:"Post"
                            })
                        }}>
                            <FontAwesomeIcon icon={faLock} /> Change Password
                        </button>
                    </li>
                </ul>
                <Bookmark />
            </div>
        );
    }
}

export default Tab;