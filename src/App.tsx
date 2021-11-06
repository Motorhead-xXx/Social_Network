import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {HashRouter} from "react-router-dom";
import WithUrlDataProfileContainer from "./components/Profile/ProfileContainer";
import {Grid} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <HashRouter>
                    <Grid container>
                        <Grid item xs={12} style={{border:"1px solid"}}>
                            <HeaderContainer/>
                        </Grid>
                        <Grid item xs={12} style={{border:"1px solid", backgroundColor:"#ecffea"}}>

                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path="/profile/:userId?"
                                   render={() => <WithUrlDataProfileContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                        </Grid>
                    </Grid>
        </HashRouter>
    )

}


export default App;
