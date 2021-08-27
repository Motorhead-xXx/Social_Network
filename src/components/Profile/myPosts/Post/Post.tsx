import React from 'react';
import style from './Post.module.css';

type PropsType = {
    message: string
    likeCount: number
}


const Post = (props: PropsType) => {
    return (
        <div className={style.item}>
            <img src="https://bizlit.com.ua/image/data/pictures/YeDYzSR-10apkm4.png"/>
            <div className={style.messagePost}>
                {props.message}

                <div className={style.likeType}>
                    <span className={style.countLike}>{props.likeCount}</span>
                </div>
            </div>


        </div>

    )
}

export default Post;