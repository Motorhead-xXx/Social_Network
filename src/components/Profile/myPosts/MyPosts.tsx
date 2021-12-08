import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";
import {Button, Paper, TextField} from "@material-ui/core";
import {useFormik} from "formik";

const MyPosts = React.memo ((props: PostPropsType) => {
    let postsElements = props.profilePage.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let addPost = (values: string) => {
        if(values !== ""){
            props.addPost(values)
        }
    }

    return (
        <div className={style.containerPost}>
            <Paper elevation={3} className={style.addPost}>
                <AddNewPost onSubmit={addPost}/>
            </Paper>
            <Paper elevation={3} className={style.posts}>
                <div className={style.posts}>
                    {postsElements}
                </div>
            </Paper>
        </div>
    )
})

const AddNewPost = ({onSubmit}: { onSubmit: (values: string) => void }) => {
    const post = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: (values,{resetForm}) => {
            onSubmit(values.newPostText);
            resetForm()
        },
    });
    return (
        <div>
            <form onSubmit={post.handleSubmit} >
                <div>
                    <TextField sx={{width: "400px"}} size={"small"} color={"success"}
                                id="newPostText"
                                name="newPostText"
                                label="New post..."
                                value={post.values.newPostText}
                                onChange={post.handleChange}
                />
                    <Button color={"warning"} variant={"contained"} type="submit">Submit</Button>
                </div>
            </form>
        </div>

    )
}


export default MyPosts;