const SEND_MESSAGE = 'SEND-MESSAGES';

type dialogsDataType = {
    name: string
    id: number
    image: string
}
type messagesDataType = {
    id: number
    message: string
}

export type dialogReducerType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}

let initialState: dialogReducerType = {
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
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "yo Hi"},
        {id: 4, message: "Hello Hi"},
        {id: 5, message: "Yo yo yo"},
    ],
}

const dialogReducer = (state: dialogReducerType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let text = action.newMessageText;
           return  text !== "" ? {...state, messagesData: [...state.messagesData, {id: 6, message: text}]} : state
        }
        default:
            return state
    }
}

type ActionTypes = messageType
export type messageType = ReturnType<typeof onSendMessage>
export const onSendMessage = (newMessageText: string) => ({type: SEND_MESSAGE, newMessageText} as const)

export default dialogReducer;