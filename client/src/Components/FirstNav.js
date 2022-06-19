import React from 'react'
import { Link } from 'react-router-dom'

const FirstNav = () => {
  return (
    <nav>
        <div className="left">
            <h1>Club Academy</h1>
        </div>
        <div className="right">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">login</Link></li>
                </ul>
            </div>
    </nav>
  )
}

export default FirstNav