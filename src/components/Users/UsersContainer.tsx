import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


import React from "react";
import axios from "axios";
import {Users} from "./Users";
import s from "./Users.module.css";
import {Preloader} from "../common/Preloader";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    unfollow,
    usersType
} from "../../redux/userReducer";

type MapStateUserType = {
    users: usersType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchPropsType = {
    follow: (usersID: number) => void
    unfollow: (usersID: number) => void
    setUsers: (users: usersType[]) => void
    setCurrentPage: (numberPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleFetching: (isFetching:boolean) =>void
}
type UsersPropsType = MapStateUserType&MapDispatchPropsType

    type GetTypeResponseUserAPI = {
    items: usersType[]
    totalCount: number
    error: null
}


class UsersContainer extends React.Component<UsersPropsType,{}> {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get<GetTypeResponseUserAPI>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleFetching(false);
        });
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true)
        axios.get<GetTypeResponseUserAPI>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                {pages.map(p =>
                    <span className={this.props.currentPage === p ? s.selectedPage : ""}
                          onClick ={ () => {this.onPageChanged(p) } }>{p}</span>)}

               <>
                   {this.props.isFetching? <Preloader/>
                       : null}
                   <Users
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,setTotalUsersCount,toggleFetching})(UsersContainer)
