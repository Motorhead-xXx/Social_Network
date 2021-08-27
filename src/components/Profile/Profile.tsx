import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, updateNewPostText} from "../../redux/state";


type profileType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const Profile = (props: profileType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.postData}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={updateNewPostText}/>
    </div>
}

export default Profile;