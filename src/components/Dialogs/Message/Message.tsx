import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogsType = {
    name: string
    id: number
}
type messageType = {
    message: string
}

const DialogItem: React.FC<dialogsType> = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}
const Message: React.FC<messageType> = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

type dialogsDataType = {
    name: string
    id: number
}
let dialogsData: Array<dialogsDataType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Valera"}
]

type messagesDataType = {
    id: number
    message: string
}
let messagesData: Array<messagesDataType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "yo Hi"},
    {id: 4, message: "Hello Hi"},
    {id: 5, message: "Yo yo yo"},
]

type typeDialogs = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}


let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
let messagesElements = messagesData.map(mesages => <Message message={mesages.message}/>)

const Dialogs = (props: typeDialogs) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>

                {dialogsElements}


            </div>
            <div className={style.messages}>
                {messagesElements}

            </div>
        </div>

    )
}


export default Dialogs;