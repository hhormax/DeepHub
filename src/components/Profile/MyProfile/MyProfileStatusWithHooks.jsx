import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from './MyProfileStatus.module.css';

const MyProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);    
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

    return(
      <div>
        {!editMode && 
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "---" }</span>
            </div>
        }
        {editMode && 
            <div>
                <input className={s.input} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
        }
      </div>
    )
};

export default MyProfileStatusWithHooks;