import React from 'react'

import style from "./AddButton.module.scss"
import { useNavigate } from "react-router-dom"

export default function AddButton() {
  const navigate = useNavigate()

  const navigateHandler = () => navigate("/me/create-note")

  return (
    <div className={`container ${style.container}`}>        
      <button className='btn primary-btn-rounded' onClick={navigateHandler}>
        <i className="bi bi-journal-plus"></i>
      </button>
    </div>
  )
}
