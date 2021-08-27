import React from "react";
import style from './.../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogsType = {
    name: string
    id: number
}

const DialogItem: React.FC<dialogsType> = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;