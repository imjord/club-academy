import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Register from './pages/register';
import axios from 'axios';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Welcome from './pages/Welcome';
import Clubs from './pages/Clubs';
import Messages from './components/Messages';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

   function handleLogin(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/login',
      data: {
        username: username,
        password: password
      },
      withCredentials: true
    }).then(response => {
      console.log(response);
    if(response.data == "Succesfully authenticated"){
      setMsg("Login Successful");
      setPassword("");
      setUsername("");
      setLoggedIn(true);
    } else {
      setMsg("Login Failed");

    }
    })

    

  }
  const getProfile = async () => {
    const response = await axios.get('http://localhost:3001/api/users/profile', {
        withCredentials: true
    });
    console.log(response);
    setUser(response.data);
}
  

  return (
    <BrowserRouter>
   
    <div className="App">
      <Navbar loggedIn={loggedIn} />
      <Messages msg={msg} setMsg={setMsg} />
      <Routes>
        <Route path="/"  element={<Welcome />} />
        <Route path='login' element={
          
          <Login handleLogin={handleLogin} loggedIn={loggedIn} setLoggedIn={setLoggedIn} msg={msg} setMsg={setMsg} password={password} setPassword={setPassword} username={username} setUsername={setUsername} /> 
         
          } />
          <Route path="clubs" element={<Clubs />} />
          <Route path='logout' element={
            <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          } />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/profile' element={<Profile  setUser={setUser} user={user} getProfile={getProfile} />} />
      </Routes>
     
    </div>
    </BrowserRouter>
  
  );
}

export default App;
