import React from "react";
import style from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoComponentType = {
    profile: ProfileType|null
}

const ProfileInfo = (props: ProfileInfoComponentType) => {
    return (
        <div>
            <div>
                <img className={style.img} src="https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"/>
            </div>
            <div>
                <div>
                    <img src={props.profile?.photos.small}/>
                    <div>{props.profile?.fullName.toLocaleUpperCase()}</div>
                    <div>{props.profile?.contacts.instagram.toLocaleUpperCase()}</div>
                    <div>{props.profile?.contacts.vk.toLocaleUpperCase()}</div>
                    <div>{props.profile?.contacts.github.toLocaleUpperCase()}</div>
                    <div>{`looking for a job:  ${props.profile?.lookingForAJob && "Yes"}`}</div>
                    <div>{`Job Description:  ${props.profile?.lookingForAJobDescription.toLocaleUpperCase()}`}</div>
<br/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;