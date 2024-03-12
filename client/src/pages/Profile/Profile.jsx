import React from 'react';

import './Profile.css'

const Profile = () => {
  return (<section className='fullPage'>
<div className='row w-100 p-5'>
  <div className='col-1'>
      <img className="col-12 custom-border" src="/src/assets/images/PFPPlaceholder.png" alt="PLACEHOLDER"/>
      <div className='text-center border-top border-bottom my-3 var-text-blue5'>
        <h3>username</h3>
      </div>
      <div className='text-center'>
        <button className="custom-btn header-btns">
          This button swaps
          <br />
          the pink div between
          My Wedding and Events
        </button>
      </div>
    </div>
    <div className='col-6 bg-pink'>
      <div className='m-5'>
        <h1 className='text-center custom-underline'>My Wedding</h1>
        <h2>
          HERE DISPLAYS ALL OF THE EVENT INFO CREATED THROUGH THE EVENT FORM 
          <br /><br />
          IF THE USER HAS NOT YET CREATED AN EVENT, DISPLAY THE EVENT CREATION FORM
        </h2>
      </div>
    </div>
    <div className="col-5 custom-bg-light" id="img-container">
      <img className="col-12 custom-border p-1" src="/src/assets/images/CalendarPlaceholder.png" alt="PLACEHOLDER"/>
    </div>
</div>
  </section>
  )
}

export default Profile;
