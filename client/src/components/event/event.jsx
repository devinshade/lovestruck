import React from 'react';
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { DELETE_EVENT } from '../../utils/mutations';
import { QUERY_EVENTS } from '../../utils/queries';
import Auth from '../../utils/auth'

const Event = ({ event }) => {
    const [deleteEvent] = useMutation(DELETE_EVENT)
    const { refetch: refetchEvents } = useQuery(QUERY_EVENTS);
    
    const handleDelete = async (eventId) => {
        try {
            await deleteEvent({
                variables: { eventId: eventId },
                refetchQueries: [{ query: QUERY_EVENTS }]
            });

            await refetchEvents();
        } catch (err) {
            console.error(err)
        }
    }

    return (
    <div className='m-5 row'>
        <div className="custom-border var-bg-blue2 col-md-8 flex-wrap mx-auto d-flex p-4">
            <div className='mx-5 var-text-light custom-text-lg col-8'>
                <h3 className='love-struck p-3 custom-underline custom-text-xxl'>{event.title}</h3>
                <p><strong>Host(s):</strong> {event.firstName} {event.lastName}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Location:</strong> {event.location}</p>
            </div>
            <div className='mx-auto my-auto justify'>
                    <button className="custom-btn p-4 custom-text-md" onClick={() => handleDelete(event._id)}>
                         Delete
                    </button>
                    <button className="custom-btn p-4 custom-text-md">
                        RSVP today!
                    </button>
                    <Link to={{ pathname: `/updateEvents/${event._id}`, eventInfo: event }}>
                        <button className="custom-btn p-4 custom-text-md">Update</button>
                    </Link>
            </div>
        </div>
    </div>
    );
};

export default Event;
