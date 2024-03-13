import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const MyEvents = () => {
  const { data } = useQuery(QUERY_ME);
  const [userData, setUserData] = useState();
  
  useEffect(() => {
    setUserData(data?.me);
  }, [data]);

  // const eventId = userData.filter(event => event.creator === userData.id)?.id;

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {eventId ? (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{userData.events[0].title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{userData.events[0].description}</Card.Subtitle>
            <Card.Text>
              <div>Hosts: {userData.events[0].hosts}</div>
              <div>Location: {userData.events[0].location}</div>
              <div>Date: {userData.events[0].date}</div>
            </Card.Text>
            <Card.Link href="/donate">Donate to the HoneyPot</Card.Link>
          </Card.Body>
        </Card>
      ) : (
        <div>
          <p>You don't have any events!</p>
          <Link to="/events">Create an Event</Link>
        </div>
      )}
    </div>
  );
};

export default MyEvents;