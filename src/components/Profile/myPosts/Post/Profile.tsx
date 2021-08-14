import React from 'react';
import style from './Profile.module.css'
import MyPosts from "../MyPosts";


const Profile = () => {
    return <div className={style.content}>
        <img src="https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"/>
        <div>
            ava + discription
            Bla bla bal
        </div>

        <div>
            <MyPosts />
        </div>
    </div>
}

export default Profile;