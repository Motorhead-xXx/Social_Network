import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import {store} from "../../redux/redux-store";


const Navbar = () => {

  let sidebarElements = store.getState().sidebar.imagesData.map((item) => <Sidebar image={item.image}/>)

    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/Social_Network/profile" activeClassName={style.active}> Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Social_Network/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Social_Network/users" activeClassName={style.active}>Users</NavLink>
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