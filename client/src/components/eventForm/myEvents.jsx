import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Form from '../../components/eventForm/eventForm';

const MyEvents = () => {
  const { data } = useQuery(QUERY_ME);
  const [userData, setUserData] = useState();
  
  useEffect(() => {
    setUserData(data?.me);
  }, [data]);

  const hasEvents = userData && userData.events && userData.events.length > 0;

  const eventId = hasEvents ? userData.events[0].id : null;

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {eventId && userData?.events?.length > 0 && (
        userData.events.map((event) => (
          <Card key={event._id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{event.description}</Card.Subtitle>
              <Card.Text>
                <div>Hosts: {event.firstName} {event.lastName}</div>
                <div>Location: {event.location}</div>
                <div>Date: {event.date}</div>
              </Card.Text>
              <Card.Link href="/donate">Donate to the HoneyPot</Card.Link>
            </Card.Body>
          </Card>
        ))
      )}
      {!eventId && (
          <Form />
      )}
    </div>
  );
};

export default MyEvents;