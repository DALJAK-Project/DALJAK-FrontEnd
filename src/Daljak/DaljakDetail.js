import React from 'react';
import Nav from "./Nav";

import '../css/Daljak/daljak_detail.css';
function DaljakDetail() {

    const imgDetailList = [
        "detail1.jpg","detail2.jpg","detail4.jpg","detail3.jpg","detail4.jpg","detail3.jpg","detail1.jpg","detail1.jpg","detail1.jpg","detail1.jpg","detail1.jpg",
    ];
    const imgDetail = imgDetailList.map((img) => (
        <div className="item">
        <img src={require(`../img/${img}`).default} alt="sss" />
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
