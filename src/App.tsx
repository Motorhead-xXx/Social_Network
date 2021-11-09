import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {HashRouter} from "react-router-dom";
import {Grid} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/login/Login";


const App = () => {
    return (
        <HashRouter>
                    <Grid container>
                        <Grid item xs={12}>
                            <HeaderContainer/>
                        </Grid>
                        <Grid item xs={12} style={{minHeight:"100vh",padding:"10px", backgroundColor:"#ecffea"}}>

                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>

                            <Route path="/login"
                                   render={() => <LoginPage/>}/>
                        </Grid>
                    </Grid>
        </HashRouter>
    )

}


export default App;
