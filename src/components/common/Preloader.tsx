import React from "react";
import preloader from "../../images/preloader.gif";

export const Preloader = () => {

    let divStyle = {
        display: "flex",
        justifyContent: "center"
    }

    let imgStyle = {
        width: "80px",
        height: "100px",
    }
    return <div style={divStyle}> <img style={imgStyle} src={preloader}/> </div>
}