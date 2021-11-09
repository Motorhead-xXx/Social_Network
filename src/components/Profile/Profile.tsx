import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileComponentType = {
    profile: ProfileType|null
    status: string
    updateStatus: (status:string) => void
}

export const Profile = (props:ProfileComponentType) => {

    return <div>
        <ProfileInfo profile={props.profile} status={props.status}  updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

