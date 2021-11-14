import React from 'react';
import {addPost, profileReducerType} from "../../../reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../store/store";

type MapStateProfileType = {
    profilePage: profileReducerType
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
}
export type PostPropsType = MapStateProfileType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStateProfileType => {
    return {
        profilePage: state.profilePage,
    }
}
export default connect(mapStateToProps, {addPost})(MyPosts)