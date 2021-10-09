import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {addPostAC, newTextAC} from "./redux/profile-reducer";
import {messageAC, updateMessageAC} from "./redux/dialogs-reduser";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export type ActionTypes = addPostAC | newTextAC | messageAC | updateMessageAC


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact path={'/'} render={() => <Redirect to={"/profile"}/>}/>

                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>

                <Route path="/profile"
                       render={() => <Profile/>}/>

                <Route path="/users"
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    )

}


export default App;
