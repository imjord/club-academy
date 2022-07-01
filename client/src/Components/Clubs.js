import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './Clubs.css'

const Clubs = (props) => {
    const { getClubs, loading, clubs } = props;
    useEffect(() => {
        getClubs();
    }, [])

  return ( loading ? <h1>Loading...</h1> : <div>
    <Navbar />
    <div className='club-container'>
    <h1>Current Registered Clubs</h1>
    <div className='club-list'>
    <ul>
        {clubs.map(club => <li  key={club.club_id}>{club.club_name}
            <Link id='linkers' to={`/clubs/${club.club_id}`}> Club Details </Link>
            </li>

        )}
    </ul>
            {/* page navigation */}
    {/* <div className='page-nav'>
    <Link to='/clubs/page/1'>1</Link>
    </div> */}
          <button><Link id='btn' to="/clubs/create">Create a club </Link></button>
    </div>
    </div>
    
   
    <Footer />
  </div> )
  
}

export default Clubs