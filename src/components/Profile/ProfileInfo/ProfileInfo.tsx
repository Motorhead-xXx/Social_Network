import React from "react";
import style from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoComponentType = {
    profile: ProfileType|null
}

const ProfileInfo = (props: ProfileInfoComponentType) => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img className={style.img} src="https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"/>*/}
            {/*</div>*/}
            <div>
                <div>
                    <img src={props.profile?.photos.large}/>
                    <div>{props.profile?.fullName}</div>
                    <div>{props.profile?.contacts.instagram}</div>
                    <div>{props.profile?.contacts.vk}</div>
                    <div>{props.profile?.contacts.github}</div>
                    <div>{`looking for a job:  ${props.profile?.lookingForAJob && "Yes"}`}</div>
                    <div>{`Job Description:  ${props.profile?.lookingForAJobDescription}`}</div>
<br/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;