type imagesDataType = {
    image: string
}
export type sidebarReducerType = {
    imagesData: Array<imagesDataType>
}

let initialState: sidebarReducerType = {
    imagesData: [
        {image: "https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"},
        {image: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
        {image: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg"},
        {image: "https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg\""},
        {image: "https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg"}
    ]
}

const sidebarReducer = (state: sidebarReducerType = initialState, action: ActionTypes) => {
    return state
}

type ActionTypes = {}

export default sidebarReducer;