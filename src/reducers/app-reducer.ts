import {authUserLogin} from "./auth-reducer";
import {AppThunkType} from "../store/store";

type AppReducerType = {
    error: string|null
    initialized: boolean
}

let initialState = {
    error: null,
    initialized: false
}

export const appReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case "SET_ERROR": {
            return {...state, error: action.error}
        }
        case "INITIALIZED-SUCCESS":{
           return {...state, initialized: true}
        }
        default:
            return state;
    }
}

export type AppActionType = SetAppErrorType|InitialSuccessType

type SetAppErrorType = ReturnType<typeof setAppError>
export const setAppError = (error:string|null) => ({type: "SET_ERROR", error} as const)

type InitialSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = ()=>({type: "INITIALIZED-SUCCESS"} as const)

export const initializeApp = ():AppThunkType => (dispatch) => {
       let promise =  dispatch(authUserLogin())
       Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess())
        })
    dispatch(initializedSuccess())
}
