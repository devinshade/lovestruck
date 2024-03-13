import React from 'react';
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// Import the QUERY_SINGLE_THOUGHT query from our utility file
import { QUERY_SINGLE_EVENT } from '../../utils/queries';

const MyEvents = () => {
// Use `useParams()` to retrieve value of the route parameter `:thoughtId`
const { eventId } = useParams();

const { data } = useQuery(QUERY_SINGLE_EVENT, {
// Pass the `thoughtId` URL parameter into query to retrieve this thought's data
variables: { eventId: eventId },
});

const event = data?.event || {};

return (<>
  <div>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.description}</Card.Subtitle>
        <Card.Text>
          <div>Hosts: {event.hosts}</div>
          <div>Location: {event.location}</div>
          <div>Date: {event.date}</div>
        </Card.Text>
        <Card.Link href="/events">Create an Event</Card.Link>
      </Card.Body>
    </Card>
  </div>
  </>
  );
};

export default MyEvents;


