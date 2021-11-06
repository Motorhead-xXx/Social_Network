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

type SetUserDataType = ReturnType<typeof setUsersDataAC>
export const setUsersDataAC = (id: number,email: string, login: string) => ({type: SET_USER_DATA, data:{id,email,login}} as const)

type SetPhotoLoginType = ReturnType<typeof setPhotoLoginAC>
export const setPhotoLoginAC = (photo: string) => ({type: SET_PHOTO, photo}as const)