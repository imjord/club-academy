import React from 'react'
import Form from '../Components/Form'
import FirstNav from '../Components/FirstNav'
import Footer from '../Components/Footer';

const Register = () => {
  return (
    <div>
        <FirstNav/>
        <Form registerRoute="http://localhost:3001/users"/>
        <Footer />

    </div>
  )
}

export default Register