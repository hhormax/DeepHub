import React from "react"
import s from "./FormsControls.module.css"

export const Textarea = ({field, form, ...props}) => {
    debugger
    return(
        <div className={s.formControl + " " + s.error}>
            <div>
                <textarea {...field} {...props} />
            </div>
            {form.touched && form.errors && <span>"error"</span>}
        </div>
    )
}