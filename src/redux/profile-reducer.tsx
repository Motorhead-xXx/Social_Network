import {ActionTypes, AddPostActionType, NewTextActionType} from "../App";
import {profilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReduser = (state: profilePageType, action:ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: new Date().getTime(),message: state.newPostText,likeCount: 0}
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default: return state
    }
}


export const addPostActionCreator = (newText:string):AddPostActionType => ({type: ADD_POST , newText})
export const updateNewPostTextActionCreator = (newText: string): NewTextActionType => ({type: UPDATE_NEW_POST_TEXT, newText})

export default profileReduser;