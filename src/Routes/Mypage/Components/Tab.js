import React from "react";
import styled from "styled-components";
import '../../../css/Mypage/tab.css';
import {Account} from "./Tabinner/Account";
import Edit from "./Tabinner/Editpost"; 
import Post from "./Tabinner/Post";
import More from "./Tabinner/Bookmark-more";
import Bookmark from "./Tabinner/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faEdit,faBookmark,faLock, faHandHolding} from "@fortawesome/free-solid-svg-icons";
import {EditProfile} from "./Tabinner/EditProfile";
import Circle from "../../../img/circle.png";

/*<img src={Circle} width="30px" height="30px" margin="15px"/>*/

const Container=styled.div`
    display:flex;
    align-items:center;
    justify-contents:space-between;
`;
class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:"Account",
            nickName:"hong1234",
            email:"hong1234@naver.com",
            firstname:"홍",
            lastname:"길동"
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
            page=<Account 
                nickName={this.state.nickName}
                Email={this.state.email}
                firstName={this.state.firstname}
                lastName={this.state.lastname}
            />
        }else if(this.state.mode==="Edit"){
            page=<More />
        }else if(this.state.mode==="Bookmark"){
            page=<Bookmark />
        }else if(this.state.mode==="EditProfile"){
            page=<EditProfile 
                nickName={this.state.nickName}
                Email={this.state.email}
                firstName={this.state.firstname}
                lastName={this.state.lastname}
            />
        }else if(this.state.mode==="ChangePassword"){
            page="<Pwd />"
        }
        
        return(
            <div class="tab-wrap">
                <ul class="tab">
                    <Container>
                        <div>
                                {this.state.mode==='Account'?<img src={Circle} width="30px" height="30px"/>:<div class="blank"></div>}
                        </div>
                        <li class="tab__list">
                            <button onClick={()=>{
                                this.setState({
                                    mode:"Account"
                                })
                            }}>
                                <FontAwesomeIcon icon={faHome} /> Account Overview
                            </button>
                        </li>
                    </Container>
                    <Container>
                        <div>
                                {this.state.mode==='Edit'?<img src={Circle} width="30px" height="30px"/>:<div class="blank"></div>}
                        </div>
                        <li class="tab__list">
                            <button type="button"onClick={()=>{
                                this.setState({
                                    mode:"Edit"
                                })
                            }}>
                                <FontAwesomeIcon icon={faEdit} /> Edit Post
                            </button>
                        </li>
                    </Container>
                    <Container>
                        <div>
                                {this.state.mode==='Bookmark'?<img src={Circle} width="30px" height="30px"/>:<div class="blank"></div>}
                        </div>
                        <li class="tab__list">
                            <button type="button"onClick={()=>{
                                this.setState({
                                    mode:"Bookmark"
                                })
                            }}>
                                <FontAwesomeIcon icon={faBookmark} /> Bookmark
                            </button>
                        </li>
                    </Container>
                    <Container>
                        <div>
                                {this.state.mode==='EditProfile'?<img src={Circle} width="30px" height="30px"/>:<div class="blank"></div>}
                        </div>
                        <li class="tab__list">
                            <button type="button"onClick={()=>{
                                this.setState({
                                    mode:"EditProfile"
                                })
                            }}>
                                <FontAwesomeIcon icon={faEdit} /> Edit Profile
                            </button>
                        </li>
                    </Container>
                    <Container>
                        <div>
                                {this.state.mode==='ChangePassword'?<img src={Circle} width="30px" height="30px"/>:<div class="blank"></div>}
                        </div>
                        <li class="tab__list">
                            <button type="button"onClick={()=>{
                                this.setState({
                                    mode:"ChangePassword"
                                })
                            }}>
                                <FontAwesomeIcon icon={faLock} /> Change Password
                            </button>
                        </li>
                    </Container>
                </ul>
                {page};
            </div>
        );
    }
}

export default Tab;