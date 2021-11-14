import React from "react";
import {ProfileType} from "../../../reducers/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import image from '../../../images/spiderMan.svg'
import {Paper} from "@material-ui/core";
import style from './ProfileInfo.module.css'

type ProfileInfoComponentType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

// let styleProfile2 = {
//     width: "100%",
//     height: "400px",
// }

const ProfileInfo = (props: ProfileInfoComponentType) => {
    return (
        <div>
            <div>
                <div className={style.containerProfileData}>
                    <Paper elevation={3} className={style.wrapper}>
                            <img className={style.imageProfile} src={props.profile?.photos.large || image} alt={"Images profile"}/>
                            <div className={style.info}>
                                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                    </Paper>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;