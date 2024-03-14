import React, { useState, useEffect } from 'react';
import './Profile.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MyEvents from '../../components/eventForm/myEvents';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const Profile = () => {
  const { data, loading } = useQuery(QUERY_ME);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data && data.me) { // Make sure data and data.me exist before updating userData
      setUserData(data.me);
    }
  }, [data]);

  console.log(data);

  const [ showMyWedding, setShowMyWedding] = useState(true);

  const toggleDisplay = () => {
    setShowMyWedding(prevState => !prevState);
  };

  return (<section className='fullPage'>
<div className='row w-100 p-5 justify-content-between'>
  <div className='col-1'>
      <img className="col-12 custom-border" src="/src/assets/images/PFPPlaceholder.png" alt="PLACEHOLDER"/>
      <div className='text-center border-top border-bottom my-3 var-text-blue5'>
        <h3>{ userData.firstName } { userData.lastName }</h3>
      </div>
      <div>
        <button className="custom-btn header-btns" onClick={toggleDisplay} style={{ width: '90%', fontSize: '18px' }}>
          {showMyWedding ? "Other Weddings" : "My Wedding"}
        </button>
      </div>
    </div>
    <div className='col-6 var-bg-blue2 custom-border var-text-light'>
      {showMyWedding ? (
      <div className='m-5'>
        <h1 className='text-center custom-underline'>My Wedding</h1>
        <div>
          <MyEvents />
        </div>
      </div>
      ) : (
        <div className='text-center pt-5'>
          <h1 className='text-center custom-underline'>My RSVPs</h1>
          <br/>
          <h2>Will display all weddings the current user has RSVPd to</h2>
        </div>
      )}
    </div>

    <div className="col-4 mx-2 my-auto custom-bg-light" id="img-container">
          <Calendar className="custom-calendar col-12 custom-border p-1"/>
        </div>
      </div>
    </section>
  );
}

export default Profile;
