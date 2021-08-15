import React from "react";
import style from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img} src="https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"/>
            </div>
            <div>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;