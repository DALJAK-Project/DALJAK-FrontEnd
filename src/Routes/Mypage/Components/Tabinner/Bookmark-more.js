import React,{useState} from "react";
import Pagination from "react-js-pagination";
import List from "./List";
import '../../../../css/Mypage/post.css';
//Bookmark페이지의 more+ 링크에 해당
/*
    user 정보확인하여 일치하는 것 중,
    쿼리문or 필터를 이용하여 bookmark변수가 true인 자료만 표시하기
    
    페이지네이션 사용하여 n개씩 끊기
    https://ing-yeo.net/2020/10/react-beginner-3/ 코드 참고하기
*/
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
class More extends React.Component{
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
        },
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
                    <List list={this.eventlist}/>
                </div>
                <Paging/>
            </div>
        );
    }
}
export default More;