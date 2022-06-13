import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <h1>Club Academy</h1>
        </div>
        <div className="right">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clubs">Clubs</Link></li>
                </ul>
            </div>
    </nav>
  )
}

export default Navbar