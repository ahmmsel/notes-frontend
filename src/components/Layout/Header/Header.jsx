import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { logoutUser } from '../../../features/auth/auth-slice'

import style from "./Header.module.scss"

export default function Header() {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logoutHandler = () => {
    navigate("/")
    dispatch(logoutUser())
  }

  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <div className={style.logo}>
          <h1 className={style.title}>
            <Link to="/me">  
              mynotes
            </Link>
          </h1>
        </div>
        <button className="btn flat-btn" onClick={logoutHandler}>logout</button>
      </div>
    </header>
  )
}
