import React, {useEffect, useState} from 'react'
import axios from 'axios';
const Profile = (props) => {

  const { user, setUser, getProfile } = props;
   
  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
        <h1>Profile</h1>
        Welcome to your profile
        <h2>
          Your username</h2><p>{user.username}</p>
    </div>
  )
}

export default Profile