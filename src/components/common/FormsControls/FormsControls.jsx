import React from "react"

export const Textarea = ({field, meta, ...props}) => {
    return(
        <div>
            <textarea {...field} {...props} />
        </div>
    )
}