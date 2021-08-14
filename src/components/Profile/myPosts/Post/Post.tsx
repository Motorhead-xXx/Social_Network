import React from 'react';
import style from './Post.module.css';

type PropsType = {
    message: string
    like:number
}


const Post = (props:PropsType) => {
    return (
        <div className={style.item}>
            <img src="https://cs3.livemaster.ru/zhurnalfoto/3/8/f/140723153856.jpg"/>
            {props.message}
            <div>
                Like {props.like}
            </div>

        </div>

    )
}

export default Post;