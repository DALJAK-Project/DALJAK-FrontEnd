import React from "react";
import '../../../css/Mypage/tab.css';
import {Account} from "../Components/Account";
import {Edit} from "../Components/Edit"; 
import {Bookmark} from "../Components/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faEdit,faBookmark,faLock} from "@fortawesome/free-solid-svg-icons";
import {EditProfile} from "../Components/EditProfile";
class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:"Account"
        }
    }
    modeChange=(e)=>{
        this.setState({
            mode:this.props.mode
        });
    }
    
    render(){
        let page;
        if(this.state.mode==="Account"){
            page=<Account />
        }else if(this.state.mode==="Edit"){
            page=<Edit />
        }else if(this.state.mode==="Bookmark"){
            page=<Bookmark />
        }else if(this.state.mode==="EditProfile"){
            page=<EditProfile />
        }else if(this.state.mode==="ChangePassword"){
            page="<Pwd />"
        }
        return(
            <div class="tab-wrap">
                <ul class="tab">
                    <li class="tab__list">
                        <button onClick={()=>{
                            this.setState({
                                mode:"Account"
                            })
                        }}>
                            <FontAwesomeIcon icon={faHome} /> Account Overview
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
                                mode:"ChangePassword"
                            })
                        }}>
                            <FontAwesomeIcon icon={faLock} /> Change Password
                        </button>
                    </li>
                </ul>
                {page};
            </div>
        );
    }
}

export default Tab;