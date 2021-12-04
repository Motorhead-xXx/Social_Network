import React from 'react';
import './App.css';
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Grid, LinearProgress} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Navbar from "./components/Navbar/Navbar";
import {Paper} from "@mui/material";
import style from './components/Header/Header.module.css'
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./reducers/app-reducer";
import {AppStateType} from "./store/store";

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<PropsType,{}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
          return <LinearProgress color="success" />
        }

        return (
                <Grid container>
                    <Grid item xs={12}>
                        <HeaderContainer/>
                    </Grid>

                    <Grid container className={style.wrapperContent}>

                        <Paper elevation={3} className={style.navbarApp}>
                            <Navbar/>
                        </Paper>

                        <div className={style.content}>

                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>

                            <Route path="/login"
                                   render={() => <Login/>}/>
                        </div>

                    </Grid>

                </Grid>
        )
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    initialized: state.app.initialized,
})


export default compose<React.ComponentType>(
    withRouter,
    connect (mapStateToProps,{initializeApp})
)(App);
