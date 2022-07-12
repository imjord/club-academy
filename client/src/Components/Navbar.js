import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { loggedIn } = props;
  return (
   <nav>
        <div id='left-logo'>
            <h1>Club Academy</h1>
        </div>
        <div id='right-nav'>
            {loggedIn ? 
            <ul>
                <li>
                <Link className='link' to="/profile">My Profile</Link>
                </li>
                <li>
                <Link className='link' to="/clubs">Clubs</Link>
                </li>
                <li>
                <Link className='link' to="/logout">Logout</Link>
                </li>
                </ul> : <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/login">Login</Link>
                </li>
                <li>
                    <Link className='link' to="/register">Register</Link>
                </li>
            </ul>}
            
        </div>
   </nav>
  )
}

export default Navbar