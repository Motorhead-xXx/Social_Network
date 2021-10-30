import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";

type getProfileType = {
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
    profile: ProfileType|null
}

type mapDispatchToPropsType = {
    setUsersProfile: (profile: getProfileType|null)=> void
}

type PropsType = mapDispatchToPropsType & mapStateToPropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        axios.get<getProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                this.props.setUsersProfile(response.data)
                debugger
            })
    }

    render() {
        return (
            <div>
                <Profile profile = {this.props.profile}/>
            </div>)
    }
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUsersProfile}) (ProfileContainer);