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
        <a href="/signup">
          <button className="custom-btn header-btns">Sign Up</button>
        </a>
        |
        <a href="/login">
          <button className="custom-btn header-btns">Log In</button>
        </a>
      </nav>
    </header>

  )
}

export default Nav;