import React, {ChangeEvent, useEffect, useState} from "react";


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
                        <span onDoubleClick={activateEditMode}>
                        {props.status || "Add status"}
                        </span>
            </div>
            }
            {editMode &&
                 <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={onBlurEditMode} />
                </div>
            }


        </div>
    )
}