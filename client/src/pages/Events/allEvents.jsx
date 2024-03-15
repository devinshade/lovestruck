import React, { useState, useEffect } from 'react';

import Event from '../../components/event/event';

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
        <section className='fullPage m-5'>
            <div className='row justify-center'>
                {events ? events.map( event => <Event key={event._id} event={event} />) : <h1>No events found! In the whole wide world!</h1>}
            </div>
        </section>
    );
};

export default Events;
