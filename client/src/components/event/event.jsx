import React from 'react';

const Event = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
};

export default Event;