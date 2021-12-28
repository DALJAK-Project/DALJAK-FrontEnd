import React,{useState}from "react";
import Pagination from "react-js-pagination";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faEdit,faBookmark,faLock} from "@fortawesome/free-solid-svg-icons";
import '../../../../css/Mypage/post.css';
import styled from "styled-components";

const A =styled.a`
    text-decoration:none;
`;
const Paging=()=>{
    const[page,setPage]=useState(1);
    const handlePageChange=(page)=>{
        setPage(page);
        console.log(page);
    };
    return(
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    )
}
class Bookmark extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
    };
    eventlist=[
        {
            id:1,
            title:'시각 장애인들에게 도움되는 청각 어플리케이션',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-a.png'
        },
        {
            id:2,
            title:'Vibrant Portraits of 2020',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-b.png'
        },
        {
            id:3,
            title:'Designing Dashboards',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-c.png'
        }
    ]
    eventlist2=[
        {
            id:4,
            title:'Designing Dashboards',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-d.png'
        },
        {
            id:5,
            title:'Vibrant Portraits of 2020',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-e.png'
        },
        {
            id:6,
            title:'36 Days of MAlayalam type',
            desc:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            src:'more-f.png'
        }
    ]
    render(){
        return(
            <div class="tab-content">
                <div class="edit">
                    <div class="edit__title"><FontAwesomeIcon icon={faBookmark}/>Bookmark</div>
                    <div class="group">        
                        <div class="post__title">달작 게시물</div>
                        <A href="/edit_post">
                            <div class="post__more">more+</div>
                        </A>
                    </div>
                    <hr class="edit__line"/>
                    <List list={this.eventlist}/>
                </div>
                    <div class="edit"><div class="group">        
                        <div class="post__title">커뮤니티 게시물</div>
                        <A href="/edit__community">
                            <div class="post__more">more+</div>
                        </A>
                    </div>
                    <hr class="edit__line"/>
                    <List list={this.eventlist2}/>
                </div>
            </div>
        );
    }
}
//more가서 나타내주기만하면될듯
export default Bookmark;