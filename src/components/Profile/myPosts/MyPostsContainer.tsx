import React from 'react';
import {addPostActionCreator, profileReducerType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateProfileType = {
    profilePage: profileReducerType
}
type MapDispatchPropsType = {
    addPosts: (text: string) => void
    onPostChange: (text: string) => void
}
export type PostPropsType = MapStateProfileType & MapDispatchPropsType



let mapStateToProps = (state: AppStateType): MapStateProfileType => {
    return {
        profilePage: state.profilePage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPosts: (text: string) => {
            text && dispatch(addPostActionCreator(text));
        },
        onPostChange: (text: string) => {
            text && dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;