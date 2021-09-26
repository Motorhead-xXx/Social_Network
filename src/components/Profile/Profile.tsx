import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";
import {ActionTypes} from "../../App";


type profileType = {
    profilePage: profilePageType
    dispatch: (action: ActionTypes) =>void
}


const Profile = (props: profileType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.postData}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}/>
    </div>

}


export default Profile;