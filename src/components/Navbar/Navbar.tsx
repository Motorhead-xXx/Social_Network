import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <a>Profile</a>
        </div>
        <div className={`${style.active} ${style.item}`}>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>

    </nav>
}

export default Navbar;