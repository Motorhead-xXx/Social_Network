import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import React from "react";
import {Users} from "./Users";
import s from "./Users.module.css";
import {Preloader} from "../common/Preloader";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow,
    usersType
} from "../../reducers/user-reducer";
import {Pagination} from "@material-ui/core";
import {compose} from "redux";
import {Paper} from "@mui/material";
import {getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalCount, getUsersSelect} from "../../reducers/users-selector";

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
    setCurrentPage: (numberPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type UsersPropsType = MapStateUserType & MapDispatchPropsType

const stylePaginatorPaper = {
    minWidth: "100%",
    minHeight: "40px",
    alignItems: "center",
    display: "flex"
}


class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        return (
            <div className={s.containerWrapper}>
                <div className={s.paginator}>

                    <Paper sx={stylePaginatorPaper}>
                        <Pagination color={"standard"} onChange={(event, page) => {
                            this.onPageChanged(page)
                        }} count={pagesCount} variant={'text'} shape="rounded" defaultPage={1} siblingCount={13}
                                    size={"small"}/></Paper>
                </div>
                <>
                    {this.props.isFetching ? <Preloader/>
                        : null}
                    <Users
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        followingProgress={this.props.followingProgress}
                    />
                </>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelect(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer)