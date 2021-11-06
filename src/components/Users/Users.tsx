import React from "react";
import s from "./Users.module.css"
import userImages from "../../images/userImages.png"
import {usersType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/settingAPI";
import {Button} from "@material-ui/core";

type UsersType = {
    pageSize: number
    users: usersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingProgress: number[]
}

export const Users = (props: UsersType) => {
    const photoUser = props.users.filter(f => f.photos.small !== null)
    const notPhotoUser = props.users.filter(f => f.photos.small == null)
    const usersDisplay = [...photoUser, ...notPhotoUser]

    const followUser = (id: number) => {
        props.toggleFollowingProgress(true, id)
        userAPI.followUsers(id).then(res => {
            if (res.data.resultCode === 0) {
                props.follow(id)
            }
            props.toggleFollowingProgress(false, id)
        })
    }
    const unfollowUser = (id: number) => {
        props.toggleFollowingProgress(true, id)
        userAPI.unfollowUsers(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.unfollow(id)
                }
                props.toggleFollowingProgress(false, id)
            })
    }

    return (
        <div className={s.usersContainer}>
            {usersDisplay.map(u => <div key={u.id}>
                <div className={s.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userImages} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.name}>
                        <span className={s.span}>{u.name}</span>
                    </div>

                    <div>
                        {u.followed
                            ? <Button variant={"outlined"} size={'small'} color={"error"} disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                unfollowUser(u.id)
                            }}>Unfollow</Button>

                            : <Button variant={"contained"} size={'small'} disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                followUser(u.id)
                            }}>Follow</Button>
                        }
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}