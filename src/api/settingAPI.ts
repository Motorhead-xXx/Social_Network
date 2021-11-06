import axios from "axios";
import {usersType} from "../redux/user-reducer";

type GetTypeResponseUserAPI = {
    items: usersType[]
    totalCount: number
    error: null
}

type PostFollowType = {
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
        return addressAPI.delete<PostFollowType>(`follow/${id}`)
    },

followUsers(id: number) {
        return addressAPI.post<PostFollowType>(`follow/${id}`)
    }
}


