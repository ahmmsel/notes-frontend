import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { deleteNote, singleNote } from '../../features/note/note-slice'
import formatDate from '../../utility/formatDate'
import Loading from '../UI/Loading'
import style from "./Note.module.scss"

export default function Note() {
  const { noteId } = useParams()

  const { note, loading } = useSelector(state => state.note)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { pathname } = useLocation()

  const deleteNoteHandler = () => {
    navigate("/me")
    dispatch(deleteNote(noteId))
  }

  useEffect(() => {
    dispatch(singleNote(noteId))
  }, [dispatch, noteId])

  if (loading) return <Loading />

  return (
    <article className={style.note}>
      <div className={style.content}>
        <div className={style.info}>        
          <h1 className={style.title}>{note?.title}</h1>
          <small className={style.date}>{formatDate(note.createdAt)}</small>
        </div>
        <div className={style.actions}>
          <Link to={`${pathname}/edit-note`} className="pointer bi bi-pen"></Link>
          <i className="pointer bi bi-x-lg" onClick={deleteNoteHandler}></i>
        </div>
      </div>
      <p className={style.body}>
       {note?.body}
      </p>
    </article>
  )
}
