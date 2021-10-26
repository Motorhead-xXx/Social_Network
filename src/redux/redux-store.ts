import {combineReducers, createStore} from "redux";
import {profileReduser} from "./profile-reducer";
import dialogReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";
import {usersReducer} from "./userReducer";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

//@ts-ignore
window.store= store