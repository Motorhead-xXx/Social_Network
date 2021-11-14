import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import {store} from "../../store/store";
import {CardContent} from "@material-ui/core";
import {EmojiEmotions, FiberNew, LibraryMusic, Markunread, Person, Settings} from "@material-ui/icons";


const Navbar = () => {

  let sidebarElements = store.getState().sidebar.imagesData.map((item) => <Sidebar image={item.image}/>)

    return (
        <div className={style.nav}>
            <CardContent  >
            <div className={style.item}>
                <Person/>
                <NavLink to="/profile" activeClassName={style.active}> Profile</NavLink>
            </div>
            <div className={style.item}>
                <Markunread/>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <EmojiEmotions/>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <FiberNew />
                <a>News</a>
            </div>
            <div className={style.item}>
                <LibraryMusic/>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <Settings/>
                <a>Settings</a>
            </div>
            </CardContent>

            {/*<CardContent >*/}
            {/*<div className={style.friendsSidebar}>*/}
            {/*    <h3>FRIENDS </h3>*/}
            {/*    <div className={style.sidebarElements}>{sidebarElements}</div>*/}
            {/*</div>*/}
            {/*    </CardContent >*/}
        </div>
    )

}

export default Navbar;