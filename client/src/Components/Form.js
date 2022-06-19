import React, {useState} from 'react'
import axios from 'axios';

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
       axios.post(props.registerRoute, {
              username: username,
              password: password,
              email: email
       }).then
       (response => {
              console.log(response);
                setUsername('');
                setPassword('');
                setEmail('');
                
       })
         .catch(error => {

                console.log(error);
            }
        );
    }   // end handleSubmit


    console.log(props);
  return (
    <form method='POST' action={props.registerRoute}>
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}  />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </form>
  )
}

export default Form