import React from "react";
import {dialogReducerType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import {ActionTypes} from "../../App";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateDialogType = {
    dialogPage: dialogReducerType
}
type MapDispatchDialogType = {
    onSendMessageClick: (newMessageBody: string) => void
    onNewMessageChange: (body: string) => void
}
export type DialogPropsType = MapStateDialogType & MapDispatchDialogType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;