import React from 'react';
import Header from "./Header";
import {addressAPI} from "../../api/settingAPI";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setPhotoLoginAC, setUsersDataAC} from "../../redux/auth-reducer";
import {getProfileType} from "../Profile/ProfileContainer";

type GetTypeLoginUserAPI = {
    resultCode: number
    messages: string[],
    data: {
        id: number
        email: string
        login: string
    }
}
type MapStateUserType = {
    isAuth: boolean,
    login: string | null,
    photo: string|null
}

type MapDispatchPropsType = {
    setUsersDataAC: (id: number, email: string, login: string) => void
    setPhotoLoginAC: (photo: string) => void
}
type UsersLoginPropsType = MapStateUserType & MapDispatchPropsType


class HeaderContainer extends React.Component<UsersLoginPropsType> {

    componentDidMount() {
        addressAPI.get<GetTypeLoginUserAPI>('auth/me', {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUsersDataAC(id, email, login)
                    return response
                }
            })
            .then(res => {
                if (res) {
                    addressAPI.get<getProfileType>('/profile/' + res.data.data.id)
                        .then(response => {
                            this.props.setPhotoLoginAC(response.data.photos.small)
                        })}
            })
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

export default connect(mapStateToProp, {setUsersDataAC, setPhotoLoginAC})(HeaderContainer)