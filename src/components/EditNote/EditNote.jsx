import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { singleNote, updateNote } from '../../features/note/note-slice'

import style from "./EditNote.module.scss"
import useForm from "../../hooks/useForm"
import Form from '../common/Form'
import FormController from '../common/FormController'

export default function EditNote() {
  const { note } = useSelector(state => state.note)

  const { noteId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(singleNote(noteId))
  }, [dispatch, noteId])
  
  const { values, inputChangeHandler, submitFormHandler } = useForm({
    title: note.title, 
    body: note.body
  }, submitCallback)

  const navigate = useNavigate()

  function submitCallback() {
    dispatch(updateNote({id: noteId, noteData: values}))
    navigate("/me")
  }

  return (
    <section className="section">
      <div className="container">
        <Form properties={{onSubmit: submitFormHandler}} box={false}>
          <FormController
            properties={{
              type: "text",
              name: "title",
              value: values.title,
              placeholder: "note title",
              className: "input secondary-input",
              onChange: inputChangeHandler
            }}
          />
          <FormController
            type="textarea"
            properties={{
              type: "text",
              name: "body",
              value: values.body,
              placeholder: "note body",
              className: "input primary-textarea",
              onChange: inputChangeHandler
            }}
          />
          <div className={style.actions}>
            <button type="button" className="btn secondary-btn" onClick={() => navigate("/me")}>cancel</button>
            <button type="submit" className="btn primary-btn">save</button>
          </div>
        </Form>  
      </div>
    </section>
  )
}
