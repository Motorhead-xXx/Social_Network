import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {CardContent} from "@material-ui/core";
import {EmojiEmotions, FiberNew, LibraryMusic, Markunread, Person, Settings} from "@material-ui/icons";


const Navbar = () => {

    return (
        <div className={style.nav}>
            <CardContent className={style.wrapperItems}>

                <NavLink to="/profile" activeClassName={style.active}>
                    <div className={style.item}>
                        <Person/>
                        <span className={style.spanLink}>Profile</span>
                    </div>
                </NavLink>
                <NavLink to="/dialogs" activeClassName={style.active}>
                    <div className={style.item}>
                        <Markunread/>
                        <span className={style.spanLink}>Messages</span>
                    </div>
                </NavLink>
                <NavLink to="/users" activeClassName={style.active}>
                    <div className={style.item}>
                        <EmojiEmotions/>
                        <span className={style.spanLink}>Users</span>
                    </div>
                </NavLink>
                <a>
                    <div className={style.item}>
                        <FiberNew/>
                        <span className={style.spanLink}>News</span>
                    </div>
                </a>
                <div className={style.item}>
                    <LibraryMusic/>
                    <span>Music</span>
                </div>
                <div className={style.item}>
                    <Settings/>
                    <span>Settings</span>
                </div>
            </CardContent>
        </div>
    )
}

export default Navbar;