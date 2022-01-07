import React, {useEffect, useState} from "react";
import {Button, TextareaAutosize} from "@material-ui/core";


const wsChanel = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")


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

    return <div>
        <Messages/>
        <br/>
        <AddMessagesForm/>
    </div>
};

export const Messages = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        wsChanel.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])


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
    const [isReadyStatus, setIsReadyStatus] = useState<'pending' | 'ready'>('pending');

    useEffect(() => {
        wsChanel.addEventListener("open", () => {
            setIsReadyStatus('ready')
        })
    }, [])

    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChanel.send(message)
        setMessage("")
    }

    return <div>
        <div>
            <TextareaAutosize value={message} onChange={(e) => setMessage(e.currentTarget.value)}
                              style={{minWidth: "400px", height: "100px", padding: "10px"}}/>
        </div>

        <div>
            <Button disabled={isReadyStatus !== 'ready' } onClick={sendMessage} variant={"contained"}>
                Send
            </Button>
        </div>
    </div>
};

export default ChatPage;