import React from 'react'
import { useNavigate } from "react-router-dom"

import style from "./NotFound.module.scss"

export default function NotFound() {
  const navigate = useNavigate()

  const navigateHandler = () => navigate("/")

  return (
    <section className={`section ${style.section}`}>
      <div className={`container ${style.message}`}>
        <h1 className={style.text}>sorry this page is not found</h1>  
        <button className="btn primary-btn" onClick={navigateHandler}>back to home page</button>
      </div>  
    </section>
  )
}
