import React from 'react';
import './Profile.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

    <div className="col-4 mx-2 custom-bg-light" id="img-container">
          <Calendar className="custom-calendar col-12 custom-border p-1"/>
        </div>
      </div>
    </section>
  );
}

export default Profile;
