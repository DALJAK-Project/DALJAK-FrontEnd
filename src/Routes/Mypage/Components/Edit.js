import React from "react";
import '../../../css/Mypage/edit.css';
import more1 from '../../../img/more-a.png';
import more2 from '../../../img/more-b.png';
import more3 from '../../../img/more-c.png';
import more4 from '../../../img/more-d.png';
import more5 from '../../../img/more-e.png';
import more6 from '../../../img/more-f.png';

export function Edit(){
    return(
        <div class="tab-content">
            <div class="edit">
                <div class="edit__title">Edit Post</div>
                <div class="group">        
                    <div class="post__title">달작 게시물</div>
                    <div class="post__more">more+</div>
                </div>
                <hr class="edit__line"/>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">시각 장애인들에게 도움되는
                         청각 어플리케이션</div>
                        <div class="post__input">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </div>
                    </div>
                    <img src={more1} alt="" width="15%" float="right"/>
                </div>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">Vibrant Portraits of 2020</div>
                        <div class="post__input">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <img src={more2} alt="" width="15%" float="right"/>
                </div>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">36 Days of Malayalam type</div>
                        <div class="post__input">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <img src={more3} alt="" width="15%" float="right"/>
                </div>
            </div>
            <div class="edit">
                <div class="group">        
                    <div class="post__title">커뮤니티 게시물</div>
                    <div class="post__more">more+</div>
                </div>
                <hr class="edit__line"/>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">Designing Dashboards</div>
                        <div class="post__input">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <img src={more4} alt="" width="15%" float="right"/>
                </div>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">Vibrant Portraits of 2020</div>
                        <div class="post__input">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <img src={more5} alt="" width="15%" float="right"/>
                </div>
                <div class="edit__daljak">
                    <div class="daljak__post">
                        <div class="post__title">36 Days of MAlayalam type</div>
                        <div class="post__input">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    </div>
                    <img src={more6} alt="" width="15%" float="right"/>
                </div>
            </div>
        </div>
    );
}