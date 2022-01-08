import React, {useEffect, useRef, useState} from "react";
import {Button, Paper, TextareaAutosize} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ChatMessageType, removeMessages, sendMessage, startMessagesListening, stopMessagesListening} from "../reducers/chat-reducer";
import {AppStateType} from "../store/store";
import {ChatMessageAPIType} from "../api/chatApi";


const ChatPage = () => {
    return <div>
        <Paper sx={{padding:"10px 10px"}}><Chat/></Paper>
    </div>
};

export const Chat = () => {
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
            dispatch(removeMessages())
        }
    }, [])

    return <div>
        {status === "error" ?
            <div style={{background: "red", fontSize: "20px", textAlign: "center", color: "white", width: "50%"}}>
                Some error occurred. Please refresh the page!
            </div>
            :
            <><Messages/>
                <br/>
                <AddMessagesForm/>
            </>
        }
    </div>
};

export const Messages = () => {
    const messages = useSelector<AppStateType, ChatMessageType[]>(s => s.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef?.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])

    return <div>
        <div style={{maxHeight: "470px", overflow: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}/>
        </div>
    </div>
};


export const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {

    return <div>
        <div>
            <div style={{borderBottom:"2px solid orange", padding:"5px 0"}}>

            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <img style={{width: "32px", borderRadius: "50%", height: "32px"}} src={message.photo} alt={"avatar"}/>
                <b>{message.userName}</b>
            </div>
            <br/>
            <div style={{fontSize:"17px"}}>{message.message}</div>
            </div>
        </div>
    </div>
});


export const AddMessagesForm = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const status = useSelector((state: AppStateType) => state.chat.status)

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
                              style={{minWidth: "300px", height: "100px", padding: "10px"}}/>
        </div>

        <div>
            <Button disabled={status !== 'ready'} onClick={sendMessageHandler} variant={"contained"}>
                Send
            </Button>
        </div>
    </div>
};

export default ChatPage;