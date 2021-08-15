import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type propsType = {
    name: string;
    id: number;
}
const DialogItem = (props: propsType) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:any) =>{
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name="Dymich" id={1}/>
                <DialogItem name="Sveta" id={2}/>
                <DialogItem name="Sasha" id={3}/>
                <DialogItem name="Viktor" id={4}/>
                <DialogItem name="Valera" id={5}/>
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message=" How is your it-kamasutra?" />
                <Message message="Yo" />
            </div>
        </div>

    )
}


export default Dialogs;