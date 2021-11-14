import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {HashRouter} from "react-router-dom";
import {Grid} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/login/Login";
import Navbar from "./components/Navbar/Navbar";
import {Paper} from "@mui/material";
import style from './components/Header/Header.module.css'

const App = () => {
    return (
        <HashRouter>
            <Grid container>

                <Grid item xs={12}>
                    <HeaderContainer/>
                </Grid>

                <Grid container className={style.wrapperContent} >
                       
                        <Paper elevation={0} className={style.navbarApp}>
                                <Navbar/>
                        </Paper>

                    <Paper elevation={0} className={style.content}>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>

                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>

                        <Route path="/users"
                               render={() => <UsersContainer/>}/>

                        <Route path="/login"
                               render={() => <Login/>}/></Paper>

                </Grid>

            </Grid>

        </HashRouter>
    )

}


export default App;
