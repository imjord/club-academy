import React, {useState, useEffect, Fragment} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Clubs from './Components/Clubs'
import Navbar from './Components/Navbar'
import Club from './Components/Club'
import axios from 'axios'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login' 
import Home from './pages/Home'
import CreateClub from './pages/CreateClub'

const App = () => {
  const [clubs, setClubs] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [club, setClub] = useState([{}]);

  // get a single club function
  const getClub = async (id) => {
    setLoading(true);
    const response = await axios.get(`http://localhost:3001/clubs/${id}`);
    setClub(response.data);
    setLoading(false);
  }

  // get all clubs function
  const getClubs = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:3001/clubs');
    setClubs(response.data);
    setLoading(false);
 

  }

  return (
    <BrowserRouter>
    <Fragment>
     
    <Routes>
      <Fragment>
      <Route path="/clubs" element={<Clubs getClubs={getClubs} loading={loading} clubs={clubs} />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Fragment>
      <Route>
        {/* get single club route */}
        <Route path="/clubs/:id" element={<Club getClub={getClub} loading={loading} club={club} />} />

        <Route path="/homepage" element={<Landing />} />
        <Route path='/clubs/create' element={<CreateClub/>} />
      </Route>
      
    </Routes>
    </Fragment>
    </BrowserRouter>
  
  )
}

export default App