import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogPropsType) => {


    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogItem key={dialog.id} image={dialog.image}
                                                                                 name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogPage.messagesData.map(messages => <Message key={messages.id} message={messages.message}/>)

    let newMessageBody = props.dialogPage.newMessageText;

    let onSendMessageClick = () => {
        props.onSendMessage(newMessageBody);
    }
    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value;
        props.updateNewMessage(body);
    }

    const keyClick = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.charCode === 13) {
            onSendMessageClick()
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.buttonMessage}>
                    <textarea onChange={onNewMessageChange} onKeyPress={keyClick} placeholder="Enter your message"
                              value={newMessageBody} className={style.textArea}/>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;