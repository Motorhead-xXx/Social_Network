import {chatAPI, ChatMessageAPIType, StatusType} from "../api/chatApi";
import {Dispatch} from "redux";
import {v1} from "uuid";


export type ChatMessageType = ChatMessageAPIType & { id: string }

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}
type initialStateType = typeof initialState;

export const chatReducer = (state = initialState, action: ChatReducerType): initialStateType => {
    switch (action.type) {
        case "SN/chat/MESSAGES_RECEIVED": {
            return {
                ...state,
                messages: [...state.messages, ...action.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        }
        case "SN/chat/REMOVE-MESSAGES": {
            return {
                ...state,
                messages: []
            }
        }
        case "SN/chat/STATUS_CHANGED": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export type ChatReducerType = SetUserDataType | RemoveMessagesType | StatusChangedType

type SetUserDataType = ReturnType<typeof messagesReceived>
export const messagesReceived = (messages: ChatMessageAPIType[]) => ({
    type: "SN/chat/MESSAGES_RECEIVED",
    messages,
} as const)

type RemoveMessagesType = ReturnType<typeof removeMessages>
export const removeMessages = () => ({
    type: "SN/chat/REMOVE-MESSAGES",
} as const)

type StatusChangedType = ReturnType<typeof statusChanged>
export const statusChanged = (status: StatusType) => ({
    type: "SN/chat/STATUS_CHANGED",
    status
} as const)

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandlerCreator: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandlerCreator === null) {
        _statusChangedHandlerCreator = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandlerCreator
}

export const startMessagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribeOnNewMessages('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribeOnNewMessages('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch: Dispatch) => {
    chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string) => async (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}
