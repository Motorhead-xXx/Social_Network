import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"

export const Users = (props:UsersPropsType) => {
    if (props.usersPage.users.length === 0){
        props.setUsers(
            [
                {id: 1, followed: false, name: "Dimych", status: "i am a boss",photo:"", location: {city: 'Minsk', country: "Belarus"}},
                {id: 2, followed: true, name: "Sacha", status: "i am a boss too", photo:"",location: {city: 'Moskow',country:"Russia"}},
                {id: 3, followed: false, name: "Gena", status: "i am a boss too",photo:"", location: {city: 'Kiev', country:"Ukraine"}},
            ]  )
    }

    return (
        <div>
            {
                props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photo} className={s.userPhoto}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={()=> { props.unfollow(m.id) } }>Unfollow</button>
                            :<button onClick={()=> { props.follow(m.id) } }>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                          <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{m.location.city}</div>
                        <div>{m.location.country}</div>
                    </span>
                </span>
                </div>)
            }

        </div>



    )
}