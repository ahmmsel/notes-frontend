import { useState } from "react"

function useForm(initialValues, callback) {
  // state
  const [values, setValues] = useState(initialValues)
  // handler
  const inputChangeHandler = ({ target: { name, value } }) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    for (const key in values) {
      if (!values[key].trim()) {
        return
      }
    }
    callback()
  }
  // returned
  return {
    values,
    inputChangeHandler,
    submitFormHandler
  }
}

export default useForm