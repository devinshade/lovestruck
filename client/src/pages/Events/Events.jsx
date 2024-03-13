// review Projects from tutor video
import React, { useState, useEffect } from 'react';
import Form from '../../components/eventForm/eventForm';

// import Event from '../../components/event/event'; // Assuming you have an Event component to display individual events
// import { getAllEvents } from '../../utils/API'; // Function to fetch all events

import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';

const Events = () => {
    const { data, loading } = useQuery(QUERY_EVENTS);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (data) {
            setEvents(data.events);
        }
    }, [data]);

    return (
        <section className='fullPage'>
            <Form />
            {/* <h2>All Events:</h2>
            {loading ? (
                <p>Loading...</p>
            ) : events.length > 0 ? (
                events.map((event) => <Event key={event.id} event={event} />)
            ) : (
                <p>No events available.</p>
            )} */}
        </section>
    );
};

export default Events;