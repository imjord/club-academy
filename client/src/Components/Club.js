import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Club.css';

const Club = (props) => {
    const { getClub, loading, club } = props;
    let { id } = useParams();
    
    useEffect(() => {
        getClub(id);    // getClub is a function from App.js
    }, [])

  
    const wip = () => {
      alert('This feature is not yet implemented');
    }
  return (
    loading ? <h1>Loading...</h1> : <div>
      {/* link back to /clubs */}
      <Link  id='back-link' to="/clubs">Back to Clubs</Link>
    {club.map(club => <div key={club.club_id} className="club-container-1">
      <div className="club-container-2">
    <h3>description</h3>
    <p>{club.club_description}</p>
    <p>Club member Count: NA</p>
    <p>Club Members: 0</p>
    <p>club owner: {club.club_owner_id}</p>
    </div>
    <button onClick={wip} >Join Club</button>
    </div>)}
       
    </div>
  )
}

export default Club