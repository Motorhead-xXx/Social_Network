import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoComponentType = {
    profile: ProfileType|null
    status: string
    updateStatus: (status:string) => void
}

const ProfileInfo = (props: ProfileInfoComponentType) => {
    return (
        <div>
            <div>
                <div>
                    <img src={props.profile?.photos.large} alt={"Images profile"}/>

                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
<br/>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;