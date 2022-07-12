import React, {useEffect} from 'react'
import axios from 'axios';

const Logout = (props) => {
    const { setLoggedIn, loggedIn } = props;

    useEffect(() => {
        axios.get('http://localhost:3001/api/logout', {
            withCredentials: true
        }).then(response => {
            console.log(response);
            setLoggedIn(false);
        })
    }, [])
  return (
    <div>Logout Succesfully :) </div>
  )
}

export default Logout