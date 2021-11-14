import axios from "axios";
import {usersType} from "../reducers/user-reducer";

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
type GetTypeLoginUserAPI = {
    resultCode: number
    messages: string[],
    data: {
        id: number
        email: string
        login: string
    }
}

type PostDeleteFollowType = {
    resultCode: number
    messages: string[],
    data: {}
}


export const addressAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8cfe719b-61ef-4519-9519-1e1d9dd44f52"
    }
});

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return addressAPI.get<GetTypeResponseUserAPI>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },

    unfollowUsers(id: number) {
        return addressAPI.delete<PostDeleteFollowType>(`follow/${id}`)
    },

    followUsers(id: number) {
        return addressAPI.post<PostDeleteFollowType>(`follow/${id}`)
    },
}

export const authAPI = {
    getMePhoto(res: GetTypeLoginUserAPI) {
        return addressAPI.get<getProfileType>('profile/' + res.data.id)
    },
    me() {
        return addressAPI.get<GetTypeLoginUserAPI>('auth/me')
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return addressAPI.get<getProfileType>(`profile/` + userId)
    },
    getStatusProfile(id: string) {
        return addressAPI.get<string>(`profile/status/` + id)
    },
    updateStatus(text:string){
        return addressAPI.put<any>(`profile/status`, {status:text})
    },
}


