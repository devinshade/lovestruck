import React from 'react';

import "./oops.css";

const Oops = () => {
  return (
    <section className='fullPage oops'>
      <div>
        <br />
        <h2 className='msg'>Oops! You need to be logged in!</h2>
        
        <h3 className='links'>
          <a className='button' href="/login">✨Login✨</a> or <a className='button' href="/signup">✨Sign up✨</a>
        </h3>
      </div>
    </section>
  )
}

export default Oops;