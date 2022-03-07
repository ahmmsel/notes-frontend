import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser, reset } from '../../features/auth/auth-slice'
import useForm from '../../hooks/useForm'

import Form from '../common/Form'
import FormController from '../common/FormController'
import Loading from '../UI/Loading'

export default function Register() {
  const { values, inputChangeHandler, submitFormHandler } = useForm({
    name: "",
    email: "",
    password: ""
  }, submitCallback)

  const { user, loading, error, success } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    
    return () => {
      dispatch(reset())
    }
  }, [navigate, dispatch, error])
  
  function submitCallback() {
    dispatch(registerUser(values))
    success && navigate("/me")
  }

  return (
    <Fragment>
      {loading && <Loading />}
      <section className="section">
        <div className="container">
          <Form properties={{onSubmit: submitFormHandler}} title="register">
            <FormController 
              title="name" 
              properties={{
                type: "text",
                name: "name",
                placeholder: "e.g: some one",
                className: "input primary-input",
                onChange: inputChangeHandler
              }}
            />
            <FormController 
              title="email" 
              properties={{
                type: "email",
                name: "email",
                placeholder: "e.g: example@gmail.com",
                className: "input primary-input",
                onChange: inputChangeHandler
              }}
            />
            <FormController 
              title="password" 
              properties={{
                type: "password",
                name: "password",
                placeholder: "your password",
                className: "input primary-input",
                onChange: inputChangeHandler
              }}
            />
            <button type="submit" className="btn primary-btn">register</button>
          </Form>
        </div>
      </section>
    </Fragment>
  )
}
