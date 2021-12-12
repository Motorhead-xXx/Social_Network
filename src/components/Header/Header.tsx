import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {HeaderMenu} from "./HeaderMenu";
import headerImages from "../../images/headerImages.png"
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
        <AppBar className={s.appBar} style={{backgroundColor: "#02988e"}} position={"relative"}>
            <Toolbar>
                <div className={s.headerMenu}>
                    <HeaderMenu/>
                </div>
                <Typography variant={"h1"} component="div" sx={{flexGrow: 1}}/>
                {props.isAuth ? <div className={s.login}>
                        <div className={s.headerMain}>
                            <NavLink to={'/profile'} >
                            <img className={s.photoHeader} src={props.photo ? props.photo : headerImages}/>{props.login}
                        </NavLink>
                        </div>
                        <Button size={"small"} onClick={props.logOut} color={"inherit"} variant={"outlined"}>Log out</Button>
                    </div>
                    : <NavLink to={"/login"} style={{color: "white",fontSize:"20px", fontWeight: "bold"}}>LOGIN</NavLink>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;