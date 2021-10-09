import {ActionTypes} from "../App";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type postDataType = {
    id: number
    message: string
    likeCount: number
}
export type profileReducerType = {
    postData: Array<postDataType>
    newPostText: string
}

let initialState: profileReducerType = {
    postData: [
        {id: 1, message: 'Sosiska', likeCount: 23},
        {id: 2, message: 'REDDISKA', likeCount: 77},
        {id: 3, message: 'Do you want me? ', likeCount: 107},
    ],
    newPostText: '',
}

const profileReduser = (state: profileReducerType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
         return  {
            ...state,
                postData: [{id: new Date().getTime(), message: state.newPostText, likeCount: 0},...state.postData],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {...state,
                newPostText: action.postText
            }
        }
        default:
            return state
    }
}

export type addPostAC = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (postText: string) => ({type: ADD_POST, postText} as const)

export type newTextAC = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)

export default profileReduser;