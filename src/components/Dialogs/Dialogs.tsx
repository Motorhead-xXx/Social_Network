import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogPageType} from "../../redux/state";


type DialogsType = {
    state: dialogPageType
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem image={dialog.image} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(messages => <Message message={messages.message}/>)

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