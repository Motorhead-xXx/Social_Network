import {userAPI} from "../api/settingAPI";
import {Dispatch} from "redux";

export enum ACTIONS_TYPE {
    FOLLOW = 'Users/FOLLOW',
    UNFOLLOW = 'Users/UNFOLLOW',
    SET_USERS = 'Users/SET_USERS',
    SET_CURRENT = 'Users/SET_CURRENT',
    SET_TOTAL_COUNT = 'Users/SET_TOTAL_COUNT',
    TOGGLE_FETCHING = 'Users/CHANGE_FETCHING',
    FOLLOWING_PROGRESS = 'Users/FOLLOWING_PROGRESS',
}

export type usersType = {
    id: number
    followed: boolean
    name: string
    status: string | null
    photos: { small: string, large: string }
}
type usersReduceType = {
    users: usersType[],
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}

let initialState = {
    users: [],
    pageSize: 54,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
}

export const usersReducer = (state: usersReduceType = initialState, action: ActionUsersType): usersReduceType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
        }
        case ACTIONS_TYPE.UNFOLLOW: {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
        }
        case ACTIONS_TYPE.SET_USERS: {
            return {...state, users: action.users}
        }
        case ACTIONS_TYPE.SET_CURRENT: {
            return {...state, currentPage: action.page}
        }
        case ACTIONS_TYPE.SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.totalCount}
        }
        case ACTIONS_TYPE.TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case ACTIONS_TYPE.FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export type ActionUsersType = acceptFollowType | acceptUnfollowType | setUsersType | setCurrentPageType
    | setTotalUsersCountType | toggleFetchingType | ToggleFollowingProgressType

export type acceptFollowType = ReturnType<typeof acceptFollow>
export const acceptFollow = (userID: number) => ({type: ACTIONS_TYPE.FOLLOW, userID} as const)

export type acceptUnfollowType = ReturnType<typeof acceptUnfollow>
export const acceptUnfollow = (userID: number) => ({type: ACTIONS_TYPE.UNFOLLOW, userID: userID} as const)

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: usersType[]) => ({type: ACTIONS_TYPE.SET_USERS, users} as const)

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: ACTIONS_TYPE.SET_CURRENT, page} as const)

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => ({type: ACTIONS_TYPE.SET_TOTAL_COUNT, totalCount} as const)

export type toggleFetchingType = ReturnType<typeof toggleFetching>
export const toggleFetching = (isFetching: boolean) => ({type: ACTIONS_TYPE.TOGGLE_FETCHING, isFetching} as const)

export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: ACTIONS_TYPE.FOLLOWING_PROGRESS, isFetching, userId} as const)

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    userAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleFetching(false));
            dispatch(setCurrentPage(currentPage));
        });
}

export const follow = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    userAPI.followUsers(id).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(acceptFollow(id))
        }
        dispatch(toggleFollowingProgress(false, id))
    })
}

export const unfollow = (id: number)  => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    userAPI.unfollowUsers(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(acceptUnfollow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
}
