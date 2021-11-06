import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import s from "./Users.module.css";
import {Preloader} from "../common/Preloader";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching, toggleFollowingProgress, unfollow,
    usersType
} from "../../redux/user-reducer";
import {userAPI} from "../../api/settingAPI";
import {Pagination} from "@material-ui/core";

type MapStateUserType = {
    users: usersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
export type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (numberPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
type UsersPropsType = MapStateUserType & MapDispatchPropsType


class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount);
                this.props.toggleFetching(false);
            });
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        return (
            <div>
                <div className={s.paginator}>
                    <Pagination color={"primary"} onChange={(event, page) => {
                        this.onPageChanged(page)
                    }}
                                count={pagesCount} variant={'text'} shape="rounded" defaultPage={1} siblingCount={22} size={"small"}/>
                </div>
                <>
                        {this.props.isFetching ? <Preloader/>
                            : null}

                    <Users
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingProgress={this.props.followingProgress}
                    />
                </>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateUserType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (usersID: number) => {
//             dispatch(followAC(usersID))
//         },
//
//         unfollow: (usersID: number) => {
//             dispatch(unfollowAC(usersID))
//         },
//         setUsers: (users: usersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (numberPage: number) => {
//             dispatch(setCurrentPageAC(numberPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleFetching: (isFetching: boolean) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowingProgress
})(UsersContainer)
