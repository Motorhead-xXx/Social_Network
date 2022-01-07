import {chatAPI, ChatMessageType} from "../api/chatApi";
import {Dispatch} from "redux";

type initialStateType = typeof initialState;

let initialState = {
    messages: [] as ChatMessageType[]
}


export const chatReducer = (state = initialState, action: ChatReducerType): initialStateType => {
    switch (action.type) {
        case "SN/chat/MESSAGES_RECEIVED": {
            return {
                ...state,
                messages: [...state.messages,...action.messages]
            }
        }
        case "SN/chat/REMOVE-MESSAGES": {
            return {
                ...state,
                messages: []
            }
        }
        default:
            return state;
    }
}

export type ChatReducerType = SetUserDataType|RemoveMessagesType

type SetUserDataType = ReturnType<typeof messagesReceived>
export const messagesReceived = (messages: ChatMessageType[]) => ({
    type: "SN/chat/MESSAGES_RECEIVED",
    messages,
} as const)

type RemoveMessagesType = ReturnType<typeof removeMessages>
export const removeMessages = () => ({
    type: "SN/chat/REMOVE-MESSAGES",
} as const)

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string) => async (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}
