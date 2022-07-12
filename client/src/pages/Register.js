import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    
        async function handleSubmit(e) {
            e.preventDefault();
            const response = await axios.post("http://localhost:3001/api/register", {
                username: username,
                password: password
            });

            console.log(response);
            
            if(response.data == "User Created"){
                setMsg("Succesfully registered");
                setPassword("");
      setUsername("");
            } else {
                setMsg("Username already exists");
            }
    
    
        }
    
      return (
        <div>
            <div className='login'>
                <h1>Register to club academy!</h1>
                <h6>Already a memeber?<span> <Link to="/login">Login</Link> </span></h6>
                {msg}
            </div>
            <div className='login-form'>
                <form>
                    <label htmlFor='username'>Username</label>
                    <input type="text" value={username} name="username" onChange={(e) => { setUsername(e.target.value) }} />
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type='submit' onClick={handleSubmit}>Register </button>
                </form>
            </div>
        <Footer/>
        </div>
      )
}

export default Register