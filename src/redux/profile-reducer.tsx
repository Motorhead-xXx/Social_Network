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
        {id: 1, message: 'Games', likeCount: 23},
        {id: 2, message: 'sdsdsssssssss', likeCount: 77},
        {id: 3, message: 'Do you want me? ', likeCount: 107},
    ],
    newPostText: '',
}

export const profileReduser = (state: profileReducerType = initialState, action: ActionTypes) => {
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

export type ActionTypes = addPostACType | newTextACType

export type addPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (postText: string) => ({type: ADD_POST, postText} as const)

export type newTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)
