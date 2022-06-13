import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


const Club = (props) => {
    const { getClub, loading, club } = props;
    let { id } = useParams();
    
    useEffect(() => {
        getClub(id);    // getClub is a function from App.js
    }, [])

    const { name, description} = club;

  return (
    loading ? <h1>Loading...</h1> : <div>
    {club.map(club => <div key={club.club_id}>{club.name}</div>)}
       
    </div>
  )
}

export default Club