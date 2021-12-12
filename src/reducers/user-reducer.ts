import {userAPI} from "../api/paramsAPI";
import {Dispatch} from "redux";
import {updateOjectInArray} from "../utils/object-halper";
import {APIResponseType, AppThunkType} from "../store/store";


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
        case 'SN/USERS/FOLLOW': {
            return {...state, users: updateOjectInArray(state.users, action.userID, "id", {followed:true})}
        }
        case 'SN/USERS/UNFOLLOW': {
            return {...state, users: updateOjectInArray(state.users, action.userID, "id", {followed:false})}
        }
        case 'SN/USERS/SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SN/USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUserCount: action.totalCount}
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
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
export const acceptFollow = (userID: number) => ({type: 'SN/USERS/FOLLOW', userID} as const)

export type acceptUnfollowType = ReturnType<typeof acceptUnfollow>
export const acceptUnfollow = (userID: number) => ({type: 'SN/USERS/UNFOLLOW', userID: userID} as const)

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: usersType[]) => ({type: 'SN/USERS/SET_USERS', users} as const)

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', page} as const)

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalCount} as const)

export type toggleFetchingType = ReturnType<typeof toggleFetching>
export const toggleFetching = (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const)

export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)

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
