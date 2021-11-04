import React from 'react'
import '../css/Home/header-bar.css';
// import '../css/Home/home-box.css';
// import '../css/Home/header-accessories.css';
// import '../css/Home/header-cardbox.css';
import '../css/Daljak/daljak_home.css';
// import '../css/Home/font.css';


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
    const moreImg = [
        "more-a.png", "more-b.png", "more-c.png", "more-d.png", "more-e.png", "more-f.png",
    ]
    return (
        <div>
            <Nav/>
            <div class="daljak__box">
            <Daljak_Center title="IT" images={imgITList} boxName='it'/>
            <Daljak_Center title="자연과학" images={imgNSList} boxName='science'/>
            <Daljak_Center title="예체능" images={imgACTList} boxName='act' moreDisplay={true}/>
            <Daljak_Catagory images={moreImg} />
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

function Daljak_Catagory({images}) {
    const cardlist = images.map((imgUrl) => (
        <div><img src={require(`../img/${imgUrl}`).default} alt=" " /></div>
    ));
    return (
        <div class="daljak__category">
            <div class="daljak__category--box ">
                <div class="daljak__box--category ">
                    <div class="daljak__box--it--text--category">
                    <span class="daljak__box--it--title ">More categories</span>
                    </div>
                    <div class="daljak__box--cardlist--grid" >
                        {cardlist}
                    </div>
                </div>
            </div>
        </div>
    )
}



function Nav() {
    return(
        <div>
            
            <nav class="header-bar">
        <div class="header-bar__menu">
            <ul>
                <li>Home</li>
                <li>다른달작</li>
                <li>내달작</li>
                <li>커뮤니티</li>
            </ul>
        </div>
        <div class="header-bar__login">
            <div class="header-bar__signup">
                <div class="header-bar__signup--square"></div>
                <span class="header-bar__signup--text">Sign up</span>
            </div>
            <span class="header-bar__login--text">Log in</span>
            <div class="header-bar__login--profile">
                <i class="far fa-user-circle fa-2x"></i>
            </div>
        </div>
    </nav>
        </div>
    )
}