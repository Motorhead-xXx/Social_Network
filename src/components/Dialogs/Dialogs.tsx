import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import {dialogPageType} from "../../redux/state";
import {ActionTypes} from "../../App";


type DialogsType = {
    state: dialogPageType
    dispatch: (action: ActionTypes) => void
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem image={dialog.image} name={dialog.name}
                                                                            id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(messages => <Message message={messages.message}/>)

    let newMessageBody = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
   let body =  event.target.value;
   props.dispatch(updateNewMessageBodyCreator(body));
    }

    const keyClick = (event:KeyboardEvent<HTMLTextAreaElement>) =>{
        if(event.charCode === 13){
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
                    <textarea onChange={onNewMessageChange} onKeyPress={keyClick} placeholder="Enter your message" value={newMessageBody} className={style.textArea}/>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>

            </div>

        </div>

    )
}


export default Dialogs;