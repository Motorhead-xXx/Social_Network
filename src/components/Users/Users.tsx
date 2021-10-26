import React from "react";
import s from "./Users.module.css"
import userImages from "../../images/userImages.png"
import { usersType} from "../../redux/userReducer";

type UsersType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: usersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

export const Users = (props: UsersType) => {
    debugger
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p ? s.selectedPage : ""}
                          onClick ={ () => {props.onPageChanged(p) } }>{p}</span>)}
            </div>
            {
                props.users.map(m => <div key={m.id}>
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