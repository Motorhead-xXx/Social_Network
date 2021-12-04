import axios, { AxiosResponse } from "axios";
import {usersType} from "../reducers/user-reducer";
import {APIResponseType} from "../store/store";

type getProfileType = {
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

type GetTypeResponseUserAPI = {
    items: usersType[]
    totalCount: number
    error: null
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}

export type LoginApiType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "21d990e0-eae8-42bd-a185-362e1cc41b0a"
    }
});

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetTypeResponseUserAPI>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },

    unfollowUsers(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`).then(res=>res.data)
    },

    followUsers(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then(res=> res.data)
    },
}

export const authAPI = {
    getMePhoto(userId: number) {
        return instance.get<getProfileType>('profile/'+userId)
    },
    me() {
        return instance.get<ResponseType<{id: number,email: string,login: string}>>('auth/me').then(res=>res.data)
    },
    login(params: LoginApiType){
        return instance.post<LoginApiType,AxiosResponse<ResponseType<{ userId: number }>>>(`auth/login/`, params)
    },
    logOut(){
        return instance.delete<ResponseType>(`/auth/login/`)
    },
}

export const profileAPI = {
    getProfile(userId: number|null) {
        return instance.get<getProfileType>(`profile/` + userId)
    },
    getStatusProfile(id: number) {
        return instance.get<string>(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put<{ status: string }, ResponseType>(`profile/status/`, {status})
    },
}


