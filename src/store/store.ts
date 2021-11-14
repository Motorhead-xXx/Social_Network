import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "../reducers/profile-reducer";
import dialogReducer from "../reducers/dialogs-reduser";
import sidebarReducer from "../reducers/sidebar-reducer";
import {usersReducer} from "../reducers/user-reducer";
import {authReducer} from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store= store