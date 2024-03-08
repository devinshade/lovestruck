import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css';

const Nav = () => {
  return (
    <header>
      <h1>
        <a href="/">💗 LoveStruck 💗</a>
      </h1>
      <nav>
        <a href="/events">
          <button className="custom-btn header-btns">Events</button>
        </a>
        |
        <a href="/">
          <button className="custom-btn header-btns">Calendar</button>
        </a>
        |
        <a href="/">
          <button className="custom-btn header-btns">My Wedding</button>
        </a>
        |
        <a href="/">
          <button className="custom-btn header-btns">Friends</button>
        </a>
        |
        <a href="/login">
          <button className="custom-btn header-btns">Login</button>
        </a>
      </nav>
    </header>
    // <nav>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         |
    //         <li><Link to="/events">Events</Link></li>
    //         |
    //         <li><Link to="/profile">My Profile</Link></li>
    //     </ul>
    // </nav>
  )
}

export default Nav;