import React from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../store/store";
import {getCurrenUsersProfile, getStatusProfile, ProfileType, updateStatus} from "../../reducers/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    getCurrenUsersProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatus: (status:string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "20026";
        }
        this.props.getCurrenUsersProfile(userId)
        this.props.getStatusProfile(userId)
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
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getCurrenUsersProfile, getStatusProfile,updateStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)