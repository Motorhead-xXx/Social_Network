import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogsType = {
    name: string
    id: number
    image: string
}

const DialogItem = (props:dialogsType) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={style.containerDialog}>

            <NavLink to={path} activeClassName={style.active} className={style.dialogsStyle}>
                 <img src={props.image} className={style.imageDialog}/>
                <div> {props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogItem;