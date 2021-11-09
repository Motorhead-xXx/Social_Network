import {Dispatch} from "redux";
import {profileAPI} from "../api/settingAPI";

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USERS_PROFILE = 'SET-USERS-PROFILE',
    SET_STATUS = 'SET-STATUS'


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
    profile: ProfileType | null
    status: string
}

let initialState: profileReducerType = {
    postData: [
        {id: 1, message: 'Sosiska', likeCount: 23},
        {id: 2, message: 'REDDISKA', likeCount: 77},
        {id: 3, message: 'Do you want me? ', likeCount: 107},
    ],
    newPostText: '',
    profile: null,
    status: "",
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
        case SET_STATUS:{
            return {...state,status:action.textStatus}
        }
        default:
            return state
    }
}

type ActionTypes = addPostACType | newTextACType | setUsersProfileType|SetStatusType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => ({type: ADD_POST, postText} as const)

type newTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)

type setUsersProfileType = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: ProfileType | null) => ({type: SET_USERS_PROFILE, profile} as const)

type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (textStatus: string) => ({type: SET_STATUS, textStatus} as const)



export const getCurrenUsersProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })

}

export const getStatusProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatusProfile(userId)
        .then(res=>{
            dispatch(setStatus(res.data))
        })
}

export const updateStatus = (status:string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res=>{
            console.log(res)
            if (res.data.resultCode === 0){
                dispatch(setStatus(status))
            }

        })
}