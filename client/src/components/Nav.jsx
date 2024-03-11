import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth.js'

import './Nav.css';

const Nav = () => {
  return (
    <header>
      <h1>
        <a href="/">💗 LoveStruck 💗</a>
      </h1>
      <nav>
        {Auth.loggedIn() ? (
        <>
          <a href="/events" >
            <button className="custom-btn header-btns">All Events</button>
          </a>
          |
          <a href="/profile" >
            <button className="custom-btn header-btns">My Profile</button>
          </a>
          |
          <a href="#" onClick={Auth.logout}>
            <button className="custom-btn header-btns">Log Out</button>
          </a>
        </>
        ) : (
        <>
          <a href="/login">
            <button className="custom-btn header-btns">Log In</button>
          </a>
        </>
        )}
      </nav>
    </header>
  )
}

export default Nav;