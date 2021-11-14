import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {HeaderMenu} from "./HeaderMenu";
import headerImages from "../../images/headerImages.png"
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    photo: string | null
}

const Header = (props: HeaderPropsType) => {
    return (
        <AppBar style={{backgroundColor: "#02988e"}} position={"relative"}>
            <Toolbar className={s.headerMain}>
                <div className={s.headerMenu}>
                    <HeaderMenu/>
                </div>
                <Typography variant={"h1"} component="div" sx={{flexGrow: 1}}/>

                {props.isAuth ? <div className={s.login}><img className={s.photoHeader} src={props.photo ? props.photo : headerImages}/>{props.login}</div>
                    : <Button color="inherit" style={{color: "#cc5aa6", fontWeight: "bold"}}>Login</Button>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;