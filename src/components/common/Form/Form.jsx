import React from 'react'

import style from "./Form.module.scss"

export default function Form({ properties, title, children, box = true }) {
  const styling = box ? `${style.form} ${style.box}` : style.form
  return (
    <form {...properties} className={styling}>
      {title && <h3 className={style.title}>{title}</h3>}
      {children}
    </form>
  )
}
