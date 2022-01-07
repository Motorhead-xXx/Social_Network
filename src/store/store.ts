import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionTypes, profileReduser} from "../reducers/profile-reducer";
import dialogReducer, {DialogActionTypes} from "../reducers/dialogs-reduser";
import sidebarReducer from "../reducers/sidebar-reducer";
import {ActionUsersType, usersReducer} from "../reducers/user-reducer";
import {ActionAuthReducerType, authReducer} from "../reducers/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionType, appReducer} from "../reducers/app-reducer";
import {chatReducer} from "../reducers/chat-reducer";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


export type RootAppActionType =
    ActionAuthReducerType
    |AppActionType
    |DialogActionTypes
    |ProfileActionTypes
    |ActionUsersType;

export type AppThunkType = ThunkAction<void, AppStateType, unknown, RootAppActionType>

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//@ts-ignore
window.store= store