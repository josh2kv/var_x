import React, { useState, useRef } from "react"
import axios from "axios"

const Contact = () => {
  const [user, setUser] = useState({ name: null, email: null })
  const form = useRef(null)

  const handleOnSubmit = async e => {
    e.preventDefault()
    // const data = new FormData(form.current)
    // console.log("🚀 ~ data", data)
    let form = {
      fname: "John",
      lname: "Doe",
    }

    axios
      .post("http://localhost:1337/api/ezforms/submit", {
        token: null,
        formData: form,
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        // error.response.status Check status code
      })
      .finally(() => {
        //Perform action in always
      })
  }

  return (
    <form ref={form} onSubmit={handleOnSubmit}>
      <input type="text" name="name" />

      <input type="email" name="email" />

      <input type="submit" name="Sign Up" />
    </form>
  )
}

export default Contact
