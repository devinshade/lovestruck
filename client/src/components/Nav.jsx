import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav style={{backgroundColor: '#c9aa88', height: '150px'}}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;