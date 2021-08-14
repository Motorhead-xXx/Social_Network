import React from 'react';
import style from '../MyPost.module.css'

const MyPost = () => {
    return (
    <div>
        My post
    </div>
    <div className={style.posts}>
        <div className={style.item}>
            post1
        </div>
        <div className={style.item}>
            post2
        </div>
        <div>
            post3
        </div>
    </div>

}

export default MyPost;