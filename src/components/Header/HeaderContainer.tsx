import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../store/store";
import {connect} from "react-redux";
import {authUserLogin, logOut} from "../../reducers/auth-reducer";

type MapStateUserType = {
    isAuth: boolean,
    login: string | null,
    photo?: string | null
}

type MapDispatchPropsType = {
    authUserLogin: () => void
    logOut: () => void
}
type UsersLoginPropsType = MapStateUserType & MapDispatchPropsType

class HeaderContainer extends React.Component<UsersLoginPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProp = (state: AppStateType): MapStateUserType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.profilePage.profile?.photos.large
    }
}

export default connect(mapStateToProp, {authUserLogin, logOut})(HeaderContainer)