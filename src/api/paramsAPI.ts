import axios, { AxiosResponse } from "axios";
import {usersType} from "../reducers/user-reducer";
import {APIResponseType} from "../store/store";
import {PhotosType, ProfileType, UserType} from "../reducers/profile-reducer";


type SavePhotoResponseDataType = {
    photos: PhotosType
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
    captcha:string|null
}

type GetCaptchaUrlResponseType = {
    url: string
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
        return instance.get<UserType>('profile/'+userId)
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
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatusProfile(id: number) {
        return instance.get<string>(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put<{status:string},AxiosResponse<ResponseType>>(`profile/status/`, {status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<FormData,AxiosResponse<APIResponseType<SavePhotoResponseDataType>>>(`profile/photo`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ProfileType,AxiosResponse<APIResponseType>>(`profile`, profile).then(res => res.data);
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get<GetCaptchaUrlResponseType>(`/security/get-captcha-url`);
    }
}


