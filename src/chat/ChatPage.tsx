import React, {useEffect, useState} from "react";
import {Button, TextareaAutosize} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {removeMessages, sendMessage, startMessagesListening, stopMessagesListening} from "../reducers/chat-reducer";
import {AppStateType} from "../store/store";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}


const ChatPage = () => {
    return <div>
        <Chat/>
    </div>
};

export const Chat = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
            dispatch(removeMessages())
        }
    },[])

    return <div>
        <Messages/>
        <br/>
        <AddMessagesForm/>
    </div>
};

export const Messages = () => {
   const messages = useSelector<AppStateType, ChatMessageType[]>(s=> s.chat.messages);
   
    return <div>
        <div style={{maxHeight: "70vh", overflow: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    </div>
};


export const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return <div>
        <div>
            <img style={{width: "32px", borderRadius: "50%", height: "32px"}} src={message.photo} alt={"avatar"}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    </div>
};


export const AddMessagesForm = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage("")
    }

    return <div>
        <div>
            <TextareaAutosize value={message} onChange={(e) => setMessage(e.currentTarget.value)}
                              style={{minWidth: "400px", height: "100px", padding: "10px"}}/>
        </div>

        <div>
            <Button disabled={false} onClick={sendMessageHandler} variant={"contained"}>
                Send
            </Button>
        </div>
    </div>
};

export default ChatPage;