const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

type postDataType = {
    id: number
    message: string
    likeCount: number
}
export type profileReducerType = {
    postData: Array<postDataType>
    newPostText: string
    profile: ProfileType|null
}

let initialState: profileReducerType = {
    postData: [
        {id: 1, message: 'Sosiska', likeCount: 23},
        {id: 2, message: 'REDDISKA', likeCount: 77},
        {id: 3, message: 'Do you want me? ', likeCount: 107},
    ],
    newPostText: '',
    profile: null,
}

export const profileReduser = (state: profileReducerType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [{id: new Date().getTime(), message: state.newPostText, likeCount: 0}, ...state.postData],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText
            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export type ActionTypes = addPostACType | newTextACType | setUsersProfileType

export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => ({type: ADD_POST, postText} as const)

export type newTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)

export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: ProfileType|null) => ({type: SET_USERS_PROFILE, profile} as const)
