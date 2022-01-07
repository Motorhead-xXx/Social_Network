import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../reducers/profile-reducer";
import s from './Profile.module.css'

type ProfileComponentType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
    getStatusProfile: (userId: number | null) => void
}

export const Profile = (props: ProfileComponentType) => {

    return <div className={s.profileContainer}>
        <ProfileInfo profile={props.profile} saveProfile={props.saveProfile} isOwner={props.isOwner} status={props.status} savePhoto={props.savePhoto}
                     updateStatus={props.updateStatus} getStatusProfile={props.getStatusProfile}/>
        <MyPostsContainer/>
    </div>
}

