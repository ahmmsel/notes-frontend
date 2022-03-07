import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, reset } from '../../features/auth/auth-slice'
import useForm from '../../hooks/useForm'

import Form from '../common/Form'
import FormController from '../common/FormController'
import Loading from '../UI/Loading'

export default function Login() {
  const { values, inputChangeHandler, submitFormHandler } = useForm({
    email: "",
    password: ""
  }, submitCallback)

  const dispatch = useDispatch()

  const { loading, success } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {

    if (success) {
      navigate("/me")
    }

    return () => {
      dispatch(reset())
    }
  }, [navigate, dispatch, success])

  function submitCallback() {
    dispatch(loginUser(values))
  }

  return (
    <Fragment>
      {loading && <Loading />}
      <section className="section">
        <div className="container">
          <Form properties={{onSubmit: submitFormHandler}} title="login">
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
            <button className="btn primary-btn">login</button>
          </Form>
        </div>
      </section>
    </Fragment>
  )
}
