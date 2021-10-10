import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import {usersType} from "../../redux/userReducer";
import userImages from "../../images/userImages.png"

type GetTypeResponseTask = {
    items: usersType[]
    totalCount: number,
    error: null
}

export class Users extends React.Component<UsersPropsType, GetTypeResponseTask> {
    // constructor(props: UsersPropsType) {
    //     super(props);
    // }
        componentDidMount(){
            axios.get<GetTypeResponseTask>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userImages} className={s.userPhoto}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={() => {
                                this.props.unfollow(m.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(m.id)
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
}