import React, {ChangeEvent, useState} from "react";
import {ContactsType, ProfileType} from "../../../reducers/profile-reducer";
import image from '../../../images/spiderMan.svg'
import {Button, CircularProgress, Paper} from "@material-ui/core";
import style from './ProfileInfo.module.css'
import {ProfileStatusWidthHook} from "./ProfileStatusWidthHook";
import {ProfileDataForm} from "./ProfileFormData";
import ErrorSnackbars from "../../common/errorSnackbar";

type ProfileInfoComponentType = {
    profile: ProfileType | null
    status: string
    savePhoto: (file: File) => void
    updateStatus: (status: string) => void
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
}


const ProfileInfo = (props: ProfileInfoComponentType) => {
    let [editMode, setEditMode] = useState<boolean>(false)


    if (!props.profile) {
        return <CircularProgress color={"success"}/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (value: ProfileType) => {
        props.saveProfile(value)
        setEditMode(false)
    }

    return (
        <div>
            <div>
                <div className={style.containerProfileData}>
                    <Paper elevation={5} className={style.wrapper}>
                        <div className={style.photo}>
                            <img className={style.imageProfile} src={props.profile?.photos.large || image} alt={"Images profile"}/>
                            <div className={style.upload}>
                                {props.isOwner &&
                                <Button
                                    color={"warning"}
                                    size={"small"}
                                    variant={"outlined"}
                                    component="label"
                                >
                                    Edit photo
                                    <input
                                        onChange={onMainPhotoSelected}
                                        type="file"
                                        hidden
                                    />
                                </Button>}
                            </div>
                        </div>
                        <div className={style.info}>
                            <ErrorSnackbars/>
                            <ProfileStatusWidthHook status={props.status} updateStatus={props.updateStatus}/>
                            {editMode
                                ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/>
                                : <ProfileBlock profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>
                            }
                        </div>
                    </Paper>

                </div>

            </div>
        </div>
    )
}

type ProfileBlockType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileBlock = (props: ProfileBlockType) => {
    return (
        <>
            <div>
                <b>Full name:</b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
            <div>
                <b>About me for :</b> {props.profile.aboutMe}
            </div>
            {props.isOwner && <div><Button size={"small"} color={"warning"} variant={"text"} onClick={props.goToEditMode}>Edit</Button></div>}
        </>
    )
}


type ContactPropsType = {
    contactTitle: string
    contactValue?: string
}

const Contact = ({contactTitle, contactValue, ...props}: ContactPropsType) => {
    return <div className={style.contact}>
        <b>{contactTitle}</b>:{contactValue}
    </div>
}

export default ProfileInfo;