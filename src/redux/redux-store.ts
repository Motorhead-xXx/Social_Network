import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reducer";
import dialogReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

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