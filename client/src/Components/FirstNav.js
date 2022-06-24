import React from 'react'
import { Link } from 'react-router-dom'
import './Firstnav.css';

const FirstNav = () => {
  return (
    <nav>
        <div className="left">
            <h1>Club Academy</h1>
        </div>
        <div className="right">
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/register">Register</Link></li>
                <li><Link className='link' to="/login">Login</Link></li>
                </ul>
            </div>
    </nav>
  )
}

export default FirstNav