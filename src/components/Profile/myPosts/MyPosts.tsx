import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            New post
        </div>
        <div className={style.posts}>
            <div className={style.item}>
                post1
            </div>
            <div className={style.item}>
                post2
            </div>
            <div className={style.item}>
                post3
            </div>
            <div className={style.item}>
                post4
            </div>
            <div className={style.item}>
                post5
            </div>

        </div>
    </div>
    )
}

export default MyPosts;