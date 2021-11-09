import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authUserLogin} from "../../redux/auth-reducer";

type MapStateUserType = {
    isAuth: boolean,
    login: string | null,
    photo: string|null
}

type MapDispatchPropsType = {
    authUserLogin: () => void
}
type UsersLoginPropsType = MapStateUserType & MapDispatchPropsType

class HeaderContainer extends React.Component<UsersLoginPropsType> {

    componentDidMount() {
        this.props.authUserLogin()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProp = (state: AppStateType): MapStateUserType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

export default connect(mapStateToProp, {authUserLogin})(HeaderContainer)