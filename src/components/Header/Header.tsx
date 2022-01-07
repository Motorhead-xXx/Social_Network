import React from 'react';
import {Button} from "@material-ui/core";
import {HeaderMenu} from "./HeaderMenu";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => void
    photo?: string | null
}

const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.appBar}>

                <div className={s.headerMenu}>
                    <HeaderMenu/>
                </div>

            <div className={s.buttonAndTitle}>
                {props.isAuth ? <div className={s.login}>
                    <div className={s.headerMain}>
                        <NavLink to={'/profile'}>
                            {props.login}
                        </NavLink>
                    </div>
                    <Button className={s.button} size={"small"} onClick={props.logOut} color={"warning"} variant={"contained"}>Log out</Button>
                </div>
                : <div className={s.headerMain} ><NavLink to={"/login"}>LOGIN</NavLink></div>}
            </div>
        </div>
    )
}

export default Header;