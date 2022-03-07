import React from 'react'
import { useNavigate } from "react-router-dom"

import style from "./Home.module.scss"

export default function Home() {
  const navigate = useNavigate()

  const navigateHandler = ({ target: { name } }) => {
    navigate(name)
  }

  return (
    <section className={style.home}>
      <div className={`container ${style.container}`}>
        <h1 className={style.title}>write your notes online</h1> 
        <div className={style.actions}>
          <button 
            className="btn secondary-btn" 
            name="login" 
            onClick={navigateHandler}
          >login</button>
          <button 
            className="btn primary-btn" 
            name="register" 
            onClick={navigateHandler}
          >register</button>
        </div> 
      </div>  
    </section>
  )
}
