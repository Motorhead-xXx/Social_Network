import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {CircularProgress, LinearProgress} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Paper} from "@mui/material";
import style from './components/Header/Header.module.css'
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./reducers/app-reducer";
import {AppStateType} from "./store/store";
import UsersContainer from "./components/Users/UsersContainer";

const DialogContainer = React.lazy(() => import( "./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import( "./components/Profile/ProfileContainer"))
const ChatPage = React.lazy(() => import( "./chat/ChatPage"))

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <LinearProgress color="success"/>
        }

        return (
            <div>

                    <HeaderContainer/>


                <div className={style.wrapperContent}>

                    <Paper elevation={6} className={style.navbarApp}>
                        <Navbar/>
                    </Paper>

                    <div className={style.content}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>

                            <React.Suspense fallback={<div><CircularProgress color={"success"}/></div>}>

                                <Route path="/dialogs"
                                       render={() => <DialogContainer/>}/>

                                <Route path="/profile/:userId?"
                                       render={() => <ProfileContainer/>}/>

                                <Route path="/users"
                                       render={() => <UsersContainer/>}/>

                                <Route path="/login"
                                       render={() => <Login/>}/>

                                <Route path="/chat"
                                       render={() => <ChatPage/>}/>
                            </React.Suspense>
                        </Switch>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
})


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
