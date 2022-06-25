import React from 'react'
import FirstNav from '../Components/FirstNav'
import Footer from '../Components/Footer';
import LoginForm from '../Components/LoginForm'

const Login = () => {
  return (
    <div>
        <FirstNav/>
        <LoginForm loginRoute="http://localhost:3001/login"/>
        <Footer />

    </div>
  )
}

export default Login