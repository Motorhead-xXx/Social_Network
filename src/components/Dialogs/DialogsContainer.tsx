import React from "react";
import {dialogReducerType, onSendMessage} from "../../reducers/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateDialogType = {
    dialogPage: dialogReducerType
}
type MapDispatchDialogType = {
    onSendMessage: (newMessageText: string) => void
}
export type DialogPropsType = MapStateDialogType & MapDispatchDialogType

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{onSendMessage}),
    withAuthRedirect
)(Dialogs)