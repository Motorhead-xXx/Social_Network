import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType, updateNewPostText} from "./redux/state";


type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={updateNewPostText}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
