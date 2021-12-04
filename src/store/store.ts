import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionTypes, profileReduser} from "../reducers/profile-reducer";
import dialogReducer, {DialogActionTypes} from "../reducers/dialogs-reduser";
import sidebarReducer, {SideBarActionTypes} from "../reducers/sidebar-reducer";
import {ActionUsersType, usersReducer} from "../reducers/user-reducer";
import {ActionAuthReducerType, authReducer} from "../reducers/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionType, appReducer} from "../reducers/app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootAppActionType =
    ActionAuthReducerType
    |AppActionType
    |DialogActionTypes
    |ProfileActionTypes
    // |SideBarActionTypes
    |ActionUsersType;

export type AppThunkType<ReturnType=void> = ThunkAction<void, AppStateType, unknown, RootAppActionType>

//@ts-ignore
window.store= store