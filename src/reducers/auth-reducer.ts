import {authAPI, LoginApiType, securityAPI} from "../api/paramsAPI";
import {Dispatch} from "redux";
import {setAppError} from "./app-reducer";
import {AppThunkType} from "../store/store";

type AuthReduceType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: AuthReduceType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

export const authReducer = (state = initialState, action: ActionAuthReducerType): AuthReduceType => {
    switch (action.type) {
        case "SN/auth/SET_USER_DATA": {
            return {...state, ...action.data}
        }
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS': {
            return {...state, captchaUrl: action.captchaUrl}
        }
        default:
            return state;
    }
}

export type ActionAuthReducerType = SetUserDataType | getCaptchaSuccessUrlType

type SetUserDataType = ReturnType<typeof setUsersData>
export const setUsersData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SN/auth/SET_USER_DATA",
    data: {id, email, login, isAuth}
} as const)

type getCaptchaSuccessUrlType = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
    captchaUrl,
} as const)


export const authUserLogin = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setUsersData(id, email, login, true))
    }
    return response
}

export const loginTC = (data: LoginApiType): AppThunkType => async (dispatch) => {
    let res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        dispatch(authUserLogin())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(setAppError(res.data.messages[0]))
    }
}

export const logOut = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setUsersData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    let res = await securityAPI.getCaptchaUrl()
    const captcha = res.data.url
    dispatch(getCaptchaUrlSuccess(captcha))

}
