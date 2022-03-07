import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import style from "./NoteList.module.scss"
import Loading from "../../UI/Loading"
import { allNotes, deleteNote, reset } from '../../../features/note/note-slice'
import formatDate from "../../../utility/formatDate"

export default function NoteList() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { notes, loading, error, success } = useSelector(state => state.note)

  const { user } = useSelector(state => state.auth)

  const deleteNoteHandler = (id) => {
    return () => dispatch(deleteNote(id))
  }

  useEffect(() => {

    if (error) {
      console.log(error)
    }

    if (!user) {
      navigate("/")
    }

    dispatch(allNotes())

    return () => {
      dispatch(reset())
    }

  }, [navigate, dispatch, error, user])

  const navigateHandler = (id) => {
    return () => navigate(`/me/n/${id}`)
  }

  return (
    <div className={style.list}>
      {loading && <Loading />}
      {success && notes.map(note => (
        <article key={note._id} className={style.item}>
          <div className={style.content} onClick={navigateHandler(note._id)}>
            <h1 className={style.title}>{note.title}</h1>
            <small>{formatDate(note.createdAt)}</small>
          </div>
          <div className={style.actions}>
            <Link to={`/me/n/${note._id}/edit-note`} className="pointer bi bi-pen"></Link>
            <i className="pointer bi bi-x-lg" onClick={deleteNoteHandler(note._id)}></i>  
          </div>
        </article>
      ))}
    </div>
  )
}
