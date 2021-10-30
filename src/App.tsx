import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";





const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route exact path={'/Social_Network'} render={() => <Redirect to={"/Social_Network/profile"}/>}/>

                <Route path="/Social_Network/dialogs"
                       render={() => <DialogsContainer/>}/>

                <Route path="/Social_Network/profile"
                       render={() => <ProfileContainer/>}/>

                <Route path="/Social_Network/users"
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    )

}


export default App;
