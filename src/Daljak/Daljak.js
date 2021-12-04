import React from 'react'
import '../css/Home/header-bar.css';
// import '../css/Home/home-box.css';
// import '../css/Home/header-accessories.css';
// import '../css/Home/header-cardbox.css';
import '../css/Daljak/daljak_home.css';
// import '../css/Home/font.css';
import Nav from "./Nav";

export default function Daljak() {     
    const imgITList = [
        "Rectangle-a.png","Rectangle-b.png","Rectangle-c.png","Rectangle-d.png","Rectangle-e.png"
    ];
    const imgNSList = [
        "card-a.png","card-b.png","card-c.png","card-d.png","Rectangle-c.png"
    ];
    const imgACTList = [
        "act-a.png","act-a.png","act-a.png","act-b.png","act-c.png","act-d.png","act-e.png"
    ];
    return (
        <div>
            <Nav/>
            <div class="daljak__box">
            <Daljak_Center title="IT" images={imgITList} boxName='it'/>
            <Daljak_Center title="자연과학" images={imgNSList} boxName='science'/>
            <Daljak_Center title="예체능" images={imgACTList} boxName='act' moreDisplay={true}/>

            </div>
        </div>
    )
}
function Daljak_Center({title,images,boxName,moreDisplay}) {
    const cards = images.map((imgUrl) => (
        <div class="daljak__box--cardlist--card">
        <img src={require(`../img/${imgUrl}`).default} alt="" />
    </div>
    ));
    console.log(cards);
    return(
        <div class="daljak__center">
        <div class={`daljak__box--${boxName}`}>
            <div className={moreDisplay?"daljak__box--it--text":''}>
                <span class="daljak__box--it--title">{title}</span>
                <span class="daljak__box--it--desc">전체보기</span>
            </div>

            <div class="daljak__box--cardlist">
                {/* 카드 */}
                {cards}
                <span style={{color: '#816afe'}}><i class="fas fa-play-circle fa-3x"></i>
                </span>
            </div>
        </div>
    </div>
    )
}
