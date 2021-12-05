import React from "react";
import "../../../css/Home/home-cardbox.css";
import styled from "styled-components";
import Img1 from "../../../img/bad.png";
import Img2 from "../../../img/frame.png";
import Img3 from "../../../img/music.png";
import Img4 from "../../../img/photo.png";
import Img5 from "../../../img/arc.png";
import Img6 from "../../../img/news.png";
import Img7 from "../../../img/podcast.png";
import search from "../../../public/img/searchmagnifierinterfacesymbol1_79893.png";
const StyledSpan = styled.span`  
  background-color: rgba(129, 106, 254, 1);  
  color: rbga(142,252,182,1);
  `;
const TopImg = styled.img`
  width: 340.72px;
  height: 168.53px;
`;
const OutterImg = styled.img`
  width: 708px;
  height: 169px;
`;
const InnerImg = styled.img`
  width: 341px;
  height: 168.53px;
`;
const Input = styled.input`
  color: #c0c0c0;
  font-family: Noto Sans;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: none;
  outline: none;
`;
const Form = styled.form`
  position: absolute;
  top: 200px;
  width: 660px;
  height: 67px;
  display: flex;
  background: #ffffff;
  /* Primary/Purple_dark */
  border: 2px solid #6759f6;
  box-sizing: border-box;
  border-radius: 50px;
  justify-content: flex-start;
  align-items: center;
`;
/*
json에서 img 받아오기, 서버에서 조회수높은 7개 링크 변수에 넣어서 넘겨주기 
*/
const Img = styled.img`
  justify-content:center;
  margin-top:0;
  margin-right:15px;
  max-width:5%;
  height:auto;
`;
class Cardbox extends React.Component {
  constructor(props){
    super(props);
    this.state={
        searchTerm:"",
        loading:false,
        error:null
    };
  }
  handleSubmit=event=>{
    event.preventDefault();
    const {searchTerm}=this.state;
    if({searchTerm}!=""){
        this.searchByterm()
    }
  }
  clickSubmit=event=>{
    event.preventDefault();
  }
  render() {
    return (
      <body class="home-cardbox">
        <div class="v2_1348">
          <div class="home-cardbox__text">
              <span class="v2_1350">
                우리들의 작품을 <StyledSpan>공유</StyledSpan>하는 공간
                </span>
          </div>
        </div>
        <div class="home-cardbox__text--main">
          세상에 하나뿐인 작품을 이곳에 공유해 보세요!
        </div>
        <Form>
          <Input 
            placeholder="Search for music, art, culture..."
            onChange={this.handleSubmit}
          />
          <Img 
            src={search} className="logoImage" alt="iPhone_01"
          />
        </Form>
        <div class="home-cardbox__tag">
          <span class="v44_554">#rock</span>
          <span class="v44_555">#architecture</span>
          <span class="v44_556">#news</span>
          <span class="v44_557">#art</span>
          <span class="v44_558">#badminton</span>
          <span class="v44_559">#comedy</span>
        </div>
        
        <div class="home-cardbox__card">
          <span class="div">
            <TopImg src={Img1} />
          </span>
          <span class="div">
            <TopImg src={Img2} />
          </span>
          <span class="div">
            <TopImg src={Img3} />
          </span>
          <span class="div">
            <OutterImg src={Img4} />
          </span>
          <span class="div">
            <InnerImg src={Img5} />
          </span>
          <span class="div">
            <InnerImg src={Img6} />
          </span>
          <span class="div">
            <OutterImg src={Img7} />
          </span>
        </div>
      </body>
    );
  }
}
export default Cardbox;
