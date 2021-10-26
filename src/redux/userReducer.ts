export enum ACTIONS_TYPE {
    FOLLOW = 'Users/FOLLOW',
    UNFOLLOW = 'Users/UNFOLLOW',
    SET_USERS = 'Users/SET_USERS',
    SET_CURRENT = 'Users/SET_CURRENT',
    SET_TOTAL_COUNT = 'Users/SET_TOTAL_COUNT',
}

export type usersType = {
    id: number
    followed: boolean
    name: string
    status: string | null
    photos: { small: string, large: string }
}
export type usersReduceType = {
    users: usersType[],
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let initialState = {
    users: [],
    pageSize: 50,
    totalUserCount: 233,
    currentPage: 1,
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
        default:
            return state;
    }
}

export type ActionUsersType = followACType | unfollowACType | setUsersType | setCurrentPageType | setTotalUsersCountType

export type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => ({type: ACTIONS_TYPE.FOLLOW, userID} as const)

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => ({type: ACTIONS_TYPE.UNFOLLOW, userID: userID} as const)

export type setUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: usersType[]) => ({type: ACTIONS_TYPE.SET_USERS, users} as const)

export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (page: number) => ({type: ACTIONS_TYPE.SET_CURRENT, page} as const)

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => ({type: ACTIONS_TYPE.SET_TOTAL_COUNT, totalCount} as const)

