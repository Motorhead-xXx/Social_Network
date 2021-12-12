import {authUserLogin} from "./auth-reducer";
import {AppThunkType} from "../store/store";

type AppReducerType = {
    error: string | null
    initialized: boolean
}

let initialState = {
    error: null,
    initialized: false
}

export const appReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case "SN/APP/SET_ERROR": {
            return {...state, error: action.error}
        }
        case "SN/APP/INITIALIZED_SUCCESS": {
            return {...state, initialized: true}
        }
        default:
            return state;
    }
}

export type AppActionType = SetAppErrorType | InitialSuccessType

type SetAppErrorType = ReturnType<typeof setAppError>
export const setAppError = (error: string | null) => ({type: "SN/APP/SET_ERROR", error} as const)

type InitialSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => ({type: "SN/APP/INITIALIZED_SUCCESS"} as const)

export const initializeApp = (): AppThunkType => async (dispatch) => {
    let promise = await dispatch(authUserLogin())
    await Promise.all([promise])
    dispatch(initializedSuccess())
}
