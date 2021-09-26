import React  from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {postDataType} from "../../../redux/state";
import {ActionTypes} from "../../../App";




type typeMyPosts = {
    posts: Array<postDataType>
    dispatch: (action: ActionTypes) => void
    newPostText: string

}

const MyPosts = (props:typeMyPosts) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        text && props.dispatch(updateNewPostTextActionCreator(text))
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