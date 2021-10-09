import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC,
    setUsersAC,
    unfollowAC,
    usersReduceType,
    usersType
} from "../../redux/userReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateUserType = {
   usersPage: usersReduceType
}
type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: usersType[]) => void
}

export type UsersPropsType = MapStateUserType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType): MapStateUserType => {
    return {
        usersPage: state.usersPage,
    }

}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersID) => {
            dispatch(followAC(usersID))
        },

        unfollow: (usersID) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users:usersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)