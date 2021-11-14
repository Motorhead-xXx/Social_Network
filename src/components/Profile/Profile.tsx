import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../reducers/profile-reducer";
import s from './Profile.module.css'

type ProfileComponentType = {
    profile: ProfileType|null
    status: string
    updateStatus: (status:string) => void
}

export const Profile = (props:ProfileComponentType) => {

    return <div className={s.profileContainer}>
        <ProfileInfo profile={props.profile} status={props.status}  updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

