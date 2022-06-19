import React from 'react'
import Form from '../Components/Form'
import FirstNav from '../Components/FirstNav'
const Register = () => {
  return (
    <div>
        <FirstNav/>
        Register
        <Form registerRoute="http://localhost:3001/users"/>
    </div>
  )
}

export default Register