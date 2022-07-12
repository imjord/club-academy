import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Clubs = () => {
    const [clubs, setClubs] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/api/clubs', {
            withCredentials: true
        }).then(response => {
            console.log(response);
            setClubs(response.data);
            setLoading(false);
        })
    }, [])


  return (
    <div>Clubs
    {loading ? <div>Loading...</div> : <div>
        {clubs.map(club => <div > <div>{club.name}</div> <div>{club.description} </div> <div><img src={club.image} alt="club-image" /></div> 
        <button>Club Info</button>
        </div>)}
    </div>}


    </div>
  )
}

export default Clubs