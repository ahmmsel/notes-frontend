import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import Form from '../common/Form'
import FormController from '../common/FormController'
import useForm from "../../hooks/useForm"
import { createNote } from '../../features/note/note-slice'
import Loading from "../UI/Loading"

export default function CreateNote() {
  const { values, inputChangeHandler, submitFormHandler } = useForm({
    title: "",
    body: ""
  }, submitCallback)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { loading } = useSelector(state => state.note)

  function submitCallback() {
    dispatch(createNote(values))
    navigate("/me")
  }

  return (
    <section className="section">
      {loading && <Loading />}
      <div className="container">
        <Form properties={{onSubmit: submitFormHandler}} box={false}>
          <FormController
            properties={{
              type: "text",
              name: "title",
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
              placeholder: "note body",
              className: "input primary-textarea",
              onChange: inputChangeHandler
            }}
          />
          <button type="submit" className="btn primary-btn">add note</button>
        </Form>  
      </div>
    </section>
  )
}
