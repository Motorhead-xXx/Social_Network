import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {Avatar, Button, Paper} from "@material-ui/core";
import React from "react";
import {usersType} from "../../reducers/user-reducer";

type PropsType = {
    pageSize: number
    user: usersType
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    followingProgress: number[]
}

export const User = ({user, ...props}: PropsType) => {
    return (

            <Paper elevation={3} sx={{borderRadius: "20px"}}>
                <div>
                    <div className={s.user}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <div key={user.id}>
                                    {user.photos.small !== null ? <img src={user.photos.small} className={s.userPhoto}/>
                                        : <Avatar className={s.userPhoto} sx={{
                                            fontSize: "50px",
                                            width: "100px",
                                            height: "100px",
                                            background: "#10ab9e"
                                        }}> {user.name[0].toUpperCase()}</Avatar>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.name}>
                            <span className={s.span}>{user.name.substr(1, 15)}</span>
                        </div>
                        <div>
                            {user.followed
                                ? <Button variant={"outlined"} size={'small'} color={"error"} disabled={props.followingProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unfollow(user.id)
                                          }}>Unfollow</Button>

                                : <Button variant={"contained"} color={"warning"} size={'small'} disabled={props.followingProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.follow(user.id)
                                          }}>Follow</Button>
                            }
                        </div>
                    </div>
                </div>
            </Paper>

    )
}