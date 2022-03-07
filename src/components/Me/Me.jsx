import React from 'react'

import style from "./Me.module.scss"
import NoteList from '../Note/NoteList'

export default function Me() {
  return (
    <section className={`section ${style["me-section"]}`}>
      <div className="container">
        <NoteList />
      </div>  
    </section>
  )
}
