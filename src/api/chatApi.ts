const subscribers = {
    'message-received': [] as MessagesReceivedSubscribersType[],
    'status-changed': [] as StatusChangedSubscribersType[]
};

let ws: WebSocket | null = null
type EventsNamesType = 'message-received' | 'status-changed'

const closeHandler = () => {
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers["message-received"].forEach(s => s(newMessages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.log("REFRESH PAGE")
}

export const notifySubscribersAboutStatus = (status:StatusType) => {
    subscribers['status-changed'].forEach(s=>s(status))
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler);
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        ws?.removeEventListener('close', closeHandler);
        ws?.removeEventListener('message', messageHandler);
        ws?.close();
        subscribers["message-received"] = [];
        subscribers["status-changed"] = [];
    },
    subscribeOnNewMessages(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType|StatusChangedSubscribersType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType,callback: MessagesReceivedSubscribersType|StatusChangedSubscribersType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
};

type MessagesReceivedSubscribersType = (message: ChatMessageAPIType[]) => void;
type StatusChangedSubscribersType = (status: StatusType) => void;


export type StatusType = 'pending' | 'ready' | 'error'

export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}