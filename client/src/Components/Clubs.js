import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

const Clubs = (props) => {
    const { getClubs, loading, clubs } = props;
    useEffect(() => {
        getClubs();
    }, [])

  return ( loading ? <h1>Loading...</h1> : <div>
    <h1>Current Registered Clubs</h1>
    <ul>
        {clubs.map(club => <li  key={club.club_id}>{club.name}
            <Link to={`/clubs/${club.club_id}`}> Club Details</Link>
            </li>

        )}
    </ul>
  </div> )
  
}

export default Clubs