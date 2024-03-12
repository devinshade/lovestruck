// review Projects from tutor video
import React, { useState, useEffect } from 'react';
import Form from '../../components/eventForm/eventForm';
import Event from '../../components/event/event'; // Assuming you have an Event component to display individual events
import { getAllEvents } from 'api'; // Function to fetch all events

import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch all events when the component mounts
        const fetchEvents = async () => {
            const allEvents = await getAllEvents();
            setEvents(allEvents);
        };

        fetchEvents();
    }, []);

    return (
        <section className='fullPage'>
            <Form />
            <h2>All Events:</h2>
            {events.map((event, index) => (
                <Event key={index} event={event} />
            ))}
        </section>
    );
};

export default Events;