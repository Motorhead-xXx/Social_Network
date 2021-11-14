import React from "react";
import s from "./Users.module.css"
import {usersType} from "../../reducers/user-reducer";
import {NavLink} from "react-router-dom";
import {Avatar, Button, Paper} from "@material-ui/core";

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
        <div className={s.usersContainer}>
            {usersDisplay.map(u =>
                <Paper elevation={3} sx={{borderRadius:"20px"}}>
                    <div key={u.id}>
                        <div className={s.user}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <div>
                                        {u.photos.small !== null ? <img src={u.photos.small} className={s.userPhoto}/>
                                            : <Avatar className={s.userPhoto} sx={{
                                                fontSize: "50px",
                                                width: "100px",
                                                height: "100px",
                                                background: "#10ab9e"
                                            }}> {u.name[0].toUpperCase()}</Avatar>}
                                    </div>

                                </NavLink>
                            </div>
                            <div className={s.name}>
                                <span className={s.span}>{u.name.substr(1,15)}</span>
                            </div>
                            <div>
                                {u.followed
                                    ? <Button variant={"outlined"} size={'small'} color={"error"} disabled={props.followingProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.unfollow(u.id)
                                              }}>Unfollow</Button>

                                    : <Button variant={"contained"} color={"warning"} size={'small'} disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</Button>
                                }
                            </div>
                        </div>
                    </div>
                </Paper>
            )}
        </div>
    )
}