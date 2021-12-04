import React from 'react';
import Nav from "./Nav";

import '../css/Daljak/daljak_detail.css';
function DaljakDetail() {

    const imgDetailList = [
        {
            key: 1,
            imgUrl : "detail1.jpg"
        },
        {
            key: 2,
            imgUrl : "detail2.jpg"
        },
        {
            key: 3,
            imgUrl : "detail3.jpg"
        },
        {
            key: 4,
            imgUrl : "detail4.jpg"
        },
        {
            key: 5,
            imgUrl : "detail2.jpg"
        },
        {
            key: 6,
            imgUrl : "detail1.jpg"
        },
        {
            key: 7,
            imgUrl : "detail3.jpg"
        },
        {
            key: 8,
            imgUrl : "detail3.jpg"
        },
        
    ];
    const handleImgClick = (e) => {
        // console.log(e.target.dataset.key);
        const targetKey = e.target.dataset.key;
    }
    const imgDetail = imgDetailList.map((img) => (
        <div className="item" onClick={handleImgClick}  key={img.key}>
        <img src={require(`../img/${img.imgUrl}`).default} alt="img" data-key={img.key}/>
    </div>
    ))
    return (
        
        <div className="Daljak-DetailPage">
            <Nav/>
            <div className="Daljak-DetailPage-container">
                 <div className="page-title">
                    <span className="title-text">당신이 관심있는 작품을 찾아보세요</span>
                 </div>
                <div className="search-container">
                    <input className="search-bar"/>
                    <i className="search-bar-icon">icon</i>
                    <div className="search-tag">
                        <ul>
                            <li className="tag-item">#rock</li>
                            <li className="tag-item">#architecture</li>
                            <li className="tag-item">#news</li>
                            <li className="tag-item">#art</li>
                            <li className="tag-item">#badminton</li>
                            <li className="tag-item">#comedy</li>
                        </ul>
                    </div>
                </div>
                <div className="detail-items-container">    
                      {imgDetail}

                </div>
            </div>
        </div>
    )
}

export default DaljakDetail;
