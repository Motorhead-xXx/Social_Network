import React from 'react';
import {addPostAC, profileReducerType, updateNewPostTextAC} from "../../../redux/profile-reducer";
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
            text && dispatch(addPostAC(text));
        },
        onPostChange: (text: string) => {
            text && dispatch(updateNewPostTextAC(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)