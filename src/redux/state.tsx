import profileReduser from "./profile-reducer";
import dialogReducer from "./dialogs-reduser";
import {ActionTypes} from "../App";
import sidebarReducer from "./sidebar-reducer";


export type postDataType = {
    id: number
    message: string
    likeCount: number
}
export type dialogsDataType = {
    name: string
    id: number
    image: string
}
export type messagesDataType = {
    id: number
    message: string
}
export type profilePageType = {
    postData: Array<postDataType>
    newPostText: string

}
export type dialogPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageText: string
}
export type imagesDataType = {
    image: string
}
export type sidebarType = {
    imagesData: Array<imagesDataType>
}

export type RootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    sidebar: sidebarType

}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Sosiska', likeCount: 23},
                {id: 2, message: 'REDDISKA', likeCount: 77},
                {id: 3, message: 'Do you want me? ', likeCount: 107},
            ],
            newPostText: '',
        },
        dialogPage: {
            dialogsData: [
                {
                    id: 1,
                    name: "Dimych",
                    image: "https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    id: 2,
                    name: "Sveta",
                    image: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"
                },
                {id: 3, name: "Sasha", image: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},
                {
                    id: 4,
                    name: "Viktor",
                    image: "https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg\""
                },
                {
                    id: 5,
                    name: "Valera",
                    image: "https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"
                }
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {
                    id: 2,
                    message: "How is your itHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutraHow is your it-kamasutra-kamasutra?"
                },
                {id: 3, message: "yo Hi"},
                {id: 4, message: "Hello Hi"},
                {id: 5, message: "Yo yo yo"},
            ],
            newMessageText: '',
        },
        sidebar: {
            imagesData: [
                {image: "https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},
                {image: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
                {image: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},
                {image: "https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg\""},
                {image: "https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}
            ]

        },
    },

    _callSubscriber(state) {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { //{type: "ADD-POST"}
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store;