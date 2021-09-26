import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./redux/state";


 export type AppType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

export type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}
export type NewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type NewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGES"
    newText: string
}

export type ActionTypes = AddPostActionType| NewTextActionType| NewMessageActionType| SendMessageActionType




const App = (props: AppType) => {
     const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state}/>
            <div className='app-wrapper-content'>
                <Route exact path={'/'} render={() => <Redirect to={"/profile"}/>}/>

                <Route path="/dialogs"
                       render={() => <Dialogs state={state.dialogPage}
                                              dispatch={props.dispatch.bind(props.store)}/>}/>

                <Route path="/profile"
                       render={() => <Profile profilePage={state.profilePage}
                                              dispatch={props.dispatch.bind(props.store)}/>}/>
            </div>
        </div>
    )

}


export default App;
