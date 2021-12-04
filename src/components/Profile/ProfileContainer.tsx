import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../store/store";
import {getCurrenUsersProfile, getStatusProfile, ProfileType, updateStatus} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getCurrenUsersProfile: (userId: number | null) => void
    getStatusProfile: (userId: number | null) => void
    updateStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            this.props.history.push("/login")
        }
        if (!userId) {
            console.error("ID should exist in URL params or in state ('authirizedUserId')");
        } else {
            this.props.getCurrenUsersProfile(userId)
            this.props.getStatusProfile(userId)
        }
    }


    componentDidMount() {
        this.refreshProfile()
    }


    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getCurrenUsersProfile, getStatusProfile, updateStatus}),
    // withAuthRedirect,
    withRouter,
)(ProfileContainer)