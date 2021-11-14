import {authAPI} from "../api/settingAPI";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET-USER-DATA"
const SET_PHOTO = "SET-PHOTO"


type AuthReduceType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    photo: string|null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
}

export const authReducer = (state: AuthReduceType = initialState, action: ActionPropsType): AuthReduceType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_PHOTO:{
            return {...state, photo:action.photo}
        }
        default:
            return state;
    }
}

type ActionPropsType = SetPhotoLoginType| SetUserDataType

type SetUserDataType = ReturnType<typeof setUsersData>
export const setUsersData = (id: number,email: string, login: string) => ({type: SET_USER_DATA, data:{id,email,login}} as const)

type SetPhotoLoginType = ReturnType<typeof setPhotoLogin>
export const setPhotoLogin = (photo: string) => ({type: SET_PHOTO, photo}as const)

export const authUserLogin = () => (dispatch:Dispatch) =>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setUsersData(id, email, login))
                return response
            }
        })
        .then(res => {
            if (res) {
                authAPI.getMePhoto(res.data)
                    .then(response => {
                        dispatch(setPhotoLogin(response.data.photos.small))
                    })}
        })
}