import React, {ChangeEvent, useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import style from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWidthHook = (props:ProfileStatusPropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onBlurEditMode = () => {
       setEditMode(false)
        props.updateStatus(status)
    }

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            {!editMode &&
            <div>
                       <b>Status:</b> <span className={style.statusSpan} onDoubleClick={activateEditMode}>
                        {props.status || "Add status"}
                        </span>
            </div>
            }
            {editMode &&
                 <div>
                    <TextField color={"warning"} size={"small"} variant={"standard"} value={status} onChange={onStatusChange} autoFocus={true} onBlur={onBlurEditMode} />
                </div>
            }


        </div>
    )
}