import React from "react";
import {usersType} from "../../reducers/user-reducer";
import {User} from "./User";
import s from "./Users.module.css";

type UsersType = {
    pageSize: number
    users: usersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    followingProgress: number[]
}

export const Users = (props: UsersType) => {
    const photoUser = props.users.filter(f => f.photos.small !== null)
    const notPhotoUser = props.users.filter(f => f.photos.small == null)
    const usersDisplay = [...photoUser, ...notPhotoUser]
    return (
        <div>
            <div className={s.usersContainer}>
                {usersDisplay.map(u => <User key={u.id}
                                             pageSize={props.pageSize}
                                             user={u}
                                             unfollow={props.unfollow}
                                             follow={props.follow}
                                             followingProgress={props.followingProgress}/>
                )}
            </div>
        </div>
    )
}