import React from "react";
import '../../../css/Home/home_header.css';
import {Link} from "react-router-dom";
import styled from "styled-components";
/*
                    <Routes>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/other">다른달작</Link></li>
                        <li><Link to="/my">내달작</Link></li>
                        <li><Link to="/community">커뮤니티</Link></li>
                    </Routes>
                    <li>Home</li>
                    <li>다른달작</li>
                    <li>내달작</li>
                    <li>커뮤니티</li>
*/
const SButton=styled.button`

`;
const SLink=styled(Link)`
    display:block;
    textDecoration:none;
`;
const Head = () =>{
    return(
        <div class="header-bar__menu">
            <ul>
                <SLink to="/">Home</SLink>
                <SLink to="/other">다른달작</SLink>
                <SLink to="/my">내달작</SLink>
                <SLink to="/community">커뮤니티</SLink>
            </ul>
        </div>
    );
}
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm:"",
            loading:false,
            error:null
        };
      }
    handleSubmit=(event)=>{
        event.preventDefault();
        alert(event.message);
    }
    render(){
        return(
            <div class="header-bar">
                <Head />
                <div class="header-bar__login">
                    <div class="header-bar__signup">
                        <div class="header-bar__signup--square"></div>
                        <form onClick={this.handleSubmit}>
                            <span class="header-bar__signup--text">Sign up</span>
                        </form>
                    </div>

                    <span class="header-bar__login--text">Log in</span>
                    <div class="header-bar__login--profile">
                        <i class="far fa-user-circle fa-2x"></i>
                    </div>
                </div>
                <div class="lang">
                    <div class="lang--text">EN</div>
                    <button></button>
                </div>
            </div>
        );
    }
}