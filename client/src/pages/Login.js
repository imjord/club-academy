import React, {useState} from 'react'
import Footer from '../components/Footer'
import Profile from './Profile'
import { Link } from 'react-router-dom'


const Login = (props) => {

  const { handleLogin, loggedIn, setLoggedIn, msg, setMsg, password, setPassword, username, setUsername } = props;
  

  setTimeout(() => {
    setMsg("");
  }, 5000);
  

  return (
    <div>
        {loggedIn ? <div> {msg} </div> : <div> <div className='login'>
            <h1>Login to club academy!</h1>
            <h6>Not a member?<span> <Link to="/register">Register</Link> </span></h6>
            
        </div>
        {msg}
        <div className='login-form'>
            <form>
                <label htmlFor='username'>Username</label>
                <input type="text" value={username} name="username" onChange={(e) => { setUsername(e.target.value) }} />
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit' onClick={handleLogin}> Login </button>
            </form>
        </div> 
        <Footer/>
        </div>
        }
        </div>

    
  )
}

export default Login