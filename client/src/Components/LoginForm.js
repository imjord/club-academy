import React, {useState} from 'react'
import axios from 'axios';
import './Form.css';

const LoginForm = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
       axios.post("http://localhost:3001/login", {
              
              username: username,
              password: password,
              email: email
       }, {
        withCredentials: true
       }).then
       (response => {
            console.log(response);

              alert('youre logged in!');
              setUsername("");
              setPassword("");
              setEmail("");
                
       })
         .catch(error => {

                console.log(error);
            }
        );
        
    }   // end handleSubmit


   
  return (
    <div className='form-main'>
      <div className='container'>

      
      <h1>Login</h1>
    <div className='form-container'>
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='username' onChange={(e) => setUsername(e.target.value)}  />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email"  placeholder='email' name="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </form>
    </div>
    </div>
    </div>
  )
  
}

export default LoginForm