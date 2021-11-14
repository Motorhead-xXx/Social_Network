import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPropsType} from "./DialogsContainer";
import style from './Dialogs.module.css'
import {useFormik} from 'formik';
import {IconButton, TextField} from "@material-ui/core";
import MessageComponent from "./Message/Message";
import {Send} from "@material-ui/icons";

type AddMessageType = {
    onSendMessage: (values: string) => void
}


const AddMessageForm = (props: AddMessageType) => {
    const message = useFormik({
        initialValues: {
            newMessage: '',
        },
        onSubmit: (values, {resetForm}) => {
            props.onSendMessage(values.newMessage);
            resetForm()
        },
    });
    return (
        <div>
            <form onSubmit={message.handleSubmit}>
                <div className={style.formDialogs}>
                    <div>
                        <TextField
                            sx={{width: "500px", background: "#ffffdb"}}
                            multiline={true}
                            maxRows={10}
                            onChange={message.handleChange}
                            id="newMessage"
                            name="newMessage"
                            placeholder="New message..."
                            value={message.values.newMessage}
                            size={"small"}/>
                    </div>
                    <div>
                        <IconButton color={"warning"} type="submit" aria-label="delete" size="small">
                            <Send fontSize={"large"}/>
                        </IconButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Dialogs = (props: DialogPropsType) => {

    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogItem key={dialog.id} image={dialog.image} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogPage.messagesData.map(messages => <MessageComponent key={messages.id} message={messages.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.buttonMessage}>
                    <AddMessageForm onSendMessage={props.onSendMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;