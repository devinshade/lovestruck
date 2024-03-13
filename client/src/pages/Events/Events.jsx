import React, { useState, useEffect } from 'react';

import Event from '../../components/event/event';
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
            {events ? events.map( event => <Event event={event} />) : <h1>No events found! In the whole wide world!</h1>}
        </section>
    );
};

export default Events;
