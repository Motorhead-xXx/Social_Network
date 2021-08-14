import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            New post
        </div>
        <div className={style.posts}>
            <Post message='Sosiska' likeCount= {10}/>
            <Post message='Rediska' likeCount={6}/>
        </div>
    </div>
    )
}

export default MyPosts;