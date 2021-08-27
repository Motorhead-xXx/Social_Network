import React  from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType, profilePageType} from "../../../redux/state";




type typeMyPosts = {
    posts: Array<postDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props:typeMyPosts) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let newPostElement:any = React.createRef();

    let addPosts = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3> My posts </h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPosts}>Add post</button>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;