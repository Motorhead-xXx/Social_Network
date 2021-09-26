import {ActionTypes, NewMessageActionType, SendMessageActionType} from "../App";
import {dialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGES';

const dialogReducer = (state:dialogPageType, action:ActionTypes) => {
switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.newText;
        return state
    case SEND_MESSAGE:
        let body = state.newMessageText;
        state.newMessageText = "";
        state.messagesData.push({id: 6, message: body});
        return state
    default: return state
    }
}

export const sendMessageCreator = (newText:string): SendMessageActionType => ({type: SEND_MESSAGE, newText})
export const updateNewMessageBodyCreator = (newText: string):NewMessageActionType => ({type: UPDATE_NEW_MESSAGE_TEXT, newText})

export default dialogReducer;