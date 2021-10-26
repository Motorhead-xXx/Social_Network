import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersType
} from "../../redux/userReducer";

import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Dispatch} from "redux";

type MapStateUserType = {
    users: usersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (numberPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
type UsersPropsType = MapStateUserType & MapDispatchPropsType

type GetTypeResponseUserAPI = {
    items: usersType[]
    totalCount: number
    error: null
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<GetTypeResponseUserAPI>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged(pageNumber: number){
        this.props.setCurrentPage(pageNumber);
        axios.get<GetTypeResponseUserAPI>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return (
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged.bind(this)}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />

        )
    }
}
let mapStateToProps = (state: AppStateType): MapStateUserType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersID: number) => {
            dispatch(followAC(usersID))
        },

        unfollow: (usersID: number) => {
            dispatch(unfollowAC(usersID))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (numberPage: number) => {
            dispatch(setCurrentPageAC(numberPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
