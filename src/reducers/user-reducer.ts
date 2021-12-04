import {userAPI} from "../api/paramsAPI";
import {Dispatch} from "redux";
import {updateOjectInArray} from "../utils/object-halper";
import {APIResponseType, AppThunkType} from "../store/store";

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
    pageSize: 55,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
}

export const usersReducer = (state: usersReduceType = initialState, action: ActionUsersType): usersReduceType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {...state, users: updateOjectInArray(state.users, action.userID, "id", {followed:true})}
        }
        case ACTIONS_TYPE.UNFOLLOW: {
            return {...state, users: updateOjectInArray(state.users, action.userID, "id", {followed:false})}
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

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleFetching(false));
    dispatch(setCurrentPage(currentPage));

}


export const folowUnfolowFlow = async (dispatch:Dispatch<ActionUsersType>,userId:number, apiMethod:(userId: number) => Promise<APIResponseType>, actionCreator:(userId: number) => ActionUsersType ) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (id: number):AppThunkType => async (dispatch) => {
   await folowUnfolowFlow(dispatch, id, userAPI.followUsers.bind(userAPI), acceptFollow)
}

export const unfollow = (id: number):AppThunkType => async (dispatch) => {
    await folowUnfolowFlow(dispatch, id, userAPI.unfollowUsers.bind(userAPI), acceptUnfollow)
}
