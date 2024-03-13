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


  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   setUserData(data?.me);
  // }, [data]);

  return (<section className='fullPage'>
<div className='row w-100 p-5'>
  <div className='col-1'>
      <img className="col-12 custom-border" src="/src/assets/images/PFPPlaceholder.png" alt="PLACEHOLDER"/>
      <div className='text-center border-top border-bottom my-3 var-text-blue5'>
        <h3>{ userData.firstName } { userData.lastName }</h3>
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
        <div>
          <MyEvents />
        </div>
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
