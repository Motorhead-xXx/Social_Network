export type usersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: {city: string, country:string}
    photo:string
}

export type usersReduceType = {
    users: Array<usersType>
}


let initialState: usersReduceType = {
    users: []
}


const usersReducer = (state: usersReduceType = initialState, action:ACtionUsersType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(m => m.id === action.id? {...m, followed: true} : m)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(m => m.id === action.userID? {...m, followed: false} : m)}
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export type ACtionUsersType = followACType|unfollowACType|setUsersType

export type followACType = ReturnType<typeof followAC>
export const followAC = (id:number) => ( {type: "FOLLOW", id}as const )

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => ( {type: "UNFOLLOW", userID:userID}as const )

export type setUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: usersType[]) => ({type:"SET_USERS", users} as const)

export default usersReducer;