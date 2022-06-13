import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Club = (props) => {
    const { getClub, loading, club } = props;
    let { id } = useParams();
    
    useEffect(() => {
        getClub(id);    // getClub is a function from App.js
    }, [])

  

  return (
    loading ? <h1>Loading...</h1> : <div>
      {/* link back to /clubs */}
      <Link to="/clubs">Back to Clubs</Link>
    {club.map(club => <div key={club.club_id}>
    <h3>description</h3>
    <p>{club.description}</p>
    <p>Club member Count: NA</p>
    <h3>Club Members</h3>
    <ul>
      <li> need to implement backend </li>
    </ul>
    <p>club owner: </p>
    </div>)}
       
    </div>
  )
}

export default Club