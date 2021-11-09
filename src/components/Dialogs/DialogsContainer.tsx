import React from "react";
import {dialogReducerType, onSendMessage, updateNewMessage} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateDialogType = {
    dialogPage: dialogReducerType
}
type MapDispatchDialogType = {
    onSendMessage: (newMessageText: string) => void
    updateNewMessage: (newText: string) => void
}
export type DialogPropsType = MapStateDialogType & MapDispatchDialogType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,{onSendMessage,updateNewMessage})
)(Dialogs)