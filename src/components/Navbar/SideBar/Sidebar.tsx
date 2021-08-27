import React from 'react';
import style from '../Navbar.module.css';

type sidebarType = {
    image: string
}

const Sidebar = (props:sidebarType) => {
    return (
            <div>
                <div >
                    <img src={props.image} className={style.sidebarImg}/>
                </div>
            </div>
    )

}

export default Sidebar;