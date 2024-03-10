import React from 'react';

const Oops = () => {
  return (<section className='fullPage'>
    <div>
        <h2>Oops! You need to be logged in!</h2>

        <h3>
            <a href="/login">Login</a> or <a href="/signup">Sign up</a>
        </h3>
    </div>
  </section>
  )
}

export default Oops;