import React, {useState, useEffect, Fragment} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Clubs from './Components/Clubs'
import Navbar from './Components/Navbar'
import Club from './Components/Club'
import axios from 'axios'

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
      <Navbar />
    <Routes>
      <Fragment>
      <Route path="/clubs" element={<Clubs getClubs={getClubs} loading={loading} clubs={clubs} />} />
      </Fragment>
      <Route>
        {/* get single club route */}
        <Route path="/clubs/:id" element={<Club getClub={getClub} loading={loading} club={club} />} />
      </Route>
      
    </Routes>
    </Fragment>
    </BrowserRouter>
  
  )
}

export default App