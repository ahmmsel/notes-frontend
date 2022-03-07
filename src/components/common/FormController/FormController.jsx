import React from 'react'

import style from "./FormController.module.scss"

export default function FormController({ title, properties, type }) {
  return (
    <label className={style.controller}>
      {title && <small>{title}</small>}
      {type === "textarea" ? 
      <textarea spellCheck="false" {...properties}></textarea> :
      <input 
        {...properties}
      />}
    </label>
  )
}
