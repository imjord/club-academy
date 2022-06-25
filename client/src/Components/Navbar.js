import React from 'react'
import { Link } from 'react-router-dom'
import './Firstnav.css';
import cap from '../cap.png'

const Navbar = () => {
  return (
    <nav>
    <div className="left">
    <img height={50} width={50} src={cap} alt="cap"/>
        <h1>Club Academy</h1>
    </div>
    <div className="right">
        <ul>
            <li><Link className='link' to="/homepage">Home</Link></li>
            <li><Link className='link' to="/clubs">Clubs</Link></li>
            </ul>
        </div>
</nav>
  )
}

export default Navbar