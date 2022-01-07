import {Dispatch} from "redux";
import {profileAPI} from "../api/paramsAPI";
import {AppThunkType} from "../store/store";
import {setAppError} from "./app-reducer";

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
//
export type postDataType = {
    id: number
    message: string
    likeCount: number
}

type InitialStateType = typeof initialState

let initialState = {
    postData: [
        {id: 1, message: 'What a wonderful day today was!', likeCount: 23},
        {id: 2, message: 'I fell in love with TypeScript! ' , likeCount: 77},
        {id: 3, message: 'Who Watched Silicon Valley? Share your impressions!', likeCount: 107},
    ] as Array<postDataType>,
    profile: null as ProfileType | null,
    status: "",
}

export const profileReduser = (state = initialState, action: ProfileActionTypes): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST": {
            return {
                ...state,
                postData: [{id: new Date().getTime(), message: action.postText, likeCount: 0}, ...state.postData]
            }
        }
        case "SN/PROFILE/SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SN/PROFILE/SET_STATUS": {
            return {...state, status: action.textStatus}
        }
        case "SN/PROFILE/DELETE_POST": {
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

export type ProfileActionTypes = addPostType | setUsersProfileType | SetStatusType | DeletePostType | SavePhotosSuccess

type addPostType = ReturnType<typeof addPost>
export const addPost = (postText: string) => ({type: "SN/PROFILE/ADD-POST", postText} as const)

type setUsersProfileType = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: ProfileType) => ({type: "SN/PROFILE/SET_USER_PROFILE", profile} as const)

type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (textStatus: string) => ({type: "SN/PROFILE/SET_STATUS", textStatus} as const)

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => ({type: "SN/PROFILE/DELETE_POST", postId} as const)

type SavePhotosSuccess = ReturnType<typeof savePhotoSuccess>
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)


export const getCurrenUsersProfile = (userId: number): AppThunkType => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}

export const getStatusProfile = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatusProfile(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (status: string): AppThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        console.log(error)
    }

}

export const savePhoto = (file: File): AppThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): AppThunkType => async (dispatch, getState) => {
    let userID = getState().auth.id
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getCurrenUsersProfile(userID as number))
    } else {
        dispatch(setAppError(data.messages[0]))
    }
    return
}