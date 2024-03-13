// review Projects from tutor video
import React, { useState, useEffect } from 'react';
import EventForm from '../../components/eventForm/eventForm';
// import Event from '../../components/event/event'; // Assuming you have an Event component to display individual events
// import { getAllEvents } from '../../utils/API'; // Function to fetch all events

import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';

const Events = () => {
    // const [events, setEvents] = useState([]);
    const {data, loading} = useQuery(QUERY_EVENTS);
    const events = data?.events||[]

    // useEffect(() => {
    //     // Fetch all events when the component mounts
    //     const fetchEvents = async () => {
    //         const response = await getAllEvents();
    //         const allEvents = await response.json()
    //         console.log(allEvents)
    //         setEvents(allEvents);
    //     };

    //     fetchEvents();
    // }, []);
    console.log(events)
    return (
        <section className='fullPage'>
            <EventForm />
            <h2>All Events:</h2>
            {events.map((event, index) => (
                <Event key={index} event={event} />
            ))}
        </section>
    );
};

export default Events;