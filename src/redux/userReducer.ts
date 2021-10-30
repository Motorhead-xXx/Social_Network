export enum ACTIONS_TYPE {
    FOLLOW = 'Users/FOLLOW',
    UNFOLLOW = 'Users/UNFOLLOW',
    SET_USERS = 'Users/SET_USERS',
    SET_CURRENT = 'Users/SET_CURRENT',
    SET_TOTAL_COUNT = 'Users/SET_TOTAL_COUNT',
    TOGGLE_FETCHING= 'Users/CHANGE_FETCHING',
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
    isFetching:boolean
}

let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case ACTIONS_TYPE.SET_TOTAL_COUNT:{
            return {...state, totalUserCount: action.totalCount}
        }
        case ACTIONS_TYPE.TOGGLE_FETCHING:{
            return {...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export type ActionUsersType = followACType | unfollowACType | setUsersType | setCurrentPageType
    | setTotalUsersCountType| toggleFetchingType

export type followACType = ReturnType<typeof follow>
export const follow = (userID: number) => ({type: ACTIONS_TYPE.FOLLOW, userID} as const)

export type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userID: number) => ({type: ACTIONS_TYPE.UNFOLLOW, userID: userID} as const)

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: usersType[]) => ({type: ACTIONS_TYPE.SET_USERS, users} as const)

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: ACTIONS_TYPE.SET_CURRENT, page} as const)

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => ({type: ACTIONS_TYPE.SET_TOTAL_COUNT, totalCount} as const)

export type toggleFetchingType = ReturnType<typeof toggleFetching>
export const toggleFetching = (isFetching: boolean) => ({type: ACTIONS_TYPE.TOGGLE_FETCHING, isFetching} as const)