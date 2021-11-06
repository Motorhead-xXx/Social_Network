import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {addressAPI} from "../../api/settingAPI";

export type getProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type PathParamsType = {
    userId: string
}


type mapDispatchToPropsType = {
    setUsersProfile: (profile: getProfileType | null) => void
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "2";
        }
        addressAPI.get<getProfileType>(`/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>)
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataProfileContainer);