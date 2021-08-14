import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
    return <div className={style.content}>
        <img src="https://lifeo.ru/wp-content/uploads/vesna-100-min.jpg"/>
        <div>
            ava + discription
            Bla bla bal
        </div>

        <div>
            New post
        </div>
        <div>
            <div>
                post1
            </div>
            <div>
                post2
            </div>
            <div>
                post3
            </div>
        </div>
    </div>
}

export default Profile;