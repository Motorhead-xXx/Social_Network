import {authAPI, LoginApiType} from "../api/paramsAPI";
import {Dispatch} from "redux";
import {setAppError} from "./app-reducer";


const SET_USER_DATA = "SET-USER-DATA"
const SET_PHOTO = "SET-PHOTO"


type AuthReduceType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    photo: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
}

export const authReducer = (state: AuthReduceType = initialState, action: ActionAuthReducerType): AuthReduceType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        case SET_PHOTO: {
            return {...state, photo: action.photo}
        }
        default:
            return state;
    }
}

export type ActionAuthReducerType = SetPhotoLoginType | SetUserDataType

type SetUserDataType = ReturnType<typeof setUsersData>
export const setUsersData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const)

type SetPhotoLoginType = ReturnType<typeof setPhotoLogin>
export const setPhotoLogin = (photo: string) => ({type: SET_PHOTO, photo} as const)

export const authUserLogin = () => (dispatch: Dispatch) => {
  return authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data;
                dispatch(setUsersData(id, email, login, true))
                return response
            }
        })

}

export const loginTC = (data: LoginApiType) => (dispatch: Dispatch) => {
    authAPI.login(data).then((res) => {
        if (res.data.resultCode === 0) {
            authAPI.me()
                .then(response => {
                    if (response.resultCode === 0) {
                        const {id, email, login} = response.data;
                        dispatch(setUsersData(id, email, login, true))
                    }
                })
        }else {
            dispatch(setAppError(res.data.messages[0]))
        }
    })
}
export const logOut = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUsersData(null, null, null, false))
            }
        })
}

