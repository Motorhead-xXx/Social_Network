import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../redux/state";
import Sidebar from "./SideBar/Sidebar";


type navbarType = {
    state: RootStateType
}

const Navbar = (props:navbarType) => {

  let sidebarElements = props.state.sidebar.imagesData.map((item) => <Sidebar image={item.image}/>)

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}> Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>

            <div className={style.friendsSidebar}>
            <h3>FRIENDS </h3>
           <div className={style.sidebarElements}>{sidebarElements}</div>
            </div>

        </nav>
    )

}

export default Navbar;