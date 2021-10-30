import React from "react";
import s from "./Users.module.css"
import userImages from "../../images/userImages.png"
import {usersType} from "../../redux/userReducer";

type UsersType = {
    pageSize: number
    users: usersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

export const Users = (props: UsersType) => {


    return (

        <div>
            {props.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userImages} className={s.userPhoto}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={() => {
                                props.unfollow(m.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(m.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                          <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{"m.location.city"}</div>
                        <div>{"m.location.country"}</div>
                    </span>
                </span>
                </div>)
            }

        </div>
    )
}