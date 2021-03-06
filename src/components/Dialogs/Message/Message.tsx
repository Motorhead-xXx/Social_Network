import React from "react";
import style from './../Dialogs.module.css'


type messageType = {
    message: string
}


const MessageComponent: React.FC<messageType> = (props) => {
    return (
        <div className={style.messageStyle}>

            <div className={style.wrapper_style}/>

            <div className={style.wrapper}>

             <div>{props.message} </div>

            </div>


        </div>
    )
}
export default MessageComponent;