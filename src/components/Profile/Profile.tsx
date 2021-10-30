import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileComponentType = {
    profile: ProfileType|null
}

export const Profile = (props:ProfileComponentType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>

}

