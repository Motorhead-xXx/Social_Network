import React, {KeyboardEvent} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";

const MyPosts = (props: PostPropsType) => {

    let postsElements = props.profilePage.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPosts = () => {
        let text = newPostElement.current?.value;
       text && props.addPosts(text);
        // let text = newPostElement.current?.value;
        // text && props.dispatch(addPostActionCreator(text))
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        text && props.onPostChange(text)
        // text && props.dispatch(updateNewPostTextActionCreator(text))
    }

    const keyClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.charCode === 13) {
            addPosts()
        }
    }

    return (
        <div>
            <h3> My posts </h3>
            <div>
                <textarea onKeyPress={keyClick} onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
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