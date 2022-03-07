import React from 'react'
import { createPortal } from 'react-dom'

import style from "./Backdrop.module.scss"

export default function Backdrop({ onClick, type }) {

  const styling = type === "transparent" ? style.transparent : style.backdrop

  return createPortal(
    <div className={styling} onClick={onClick}></div>,
    document.getElementById("backdrop")
  )
}