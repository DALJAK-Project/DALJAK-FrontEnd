import React from "react";
import PropTypes from "prop-types";
import '../../../../css/Mypage/edit.css';

const List=({list})=>{
    return(
        <>
            {list.map(item=>(
                <div class="edit__daljak" key={item.id}>
                    <div class="daljak__post" id={item.id}>
                        <div class="post__title">{item.title}</div>
                        <div class="post__input">{item.desc}</div>
                    </div>
                    
                    <img src={require(`../../../../img/${item.src}`).default} alt="" width="15%" float="right"/>
                </div>
            ))}
        </>
    );
}

List.propTypes={
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default List;