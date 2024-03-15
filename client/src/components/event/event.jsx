import React from 'react';

const Event = ({ event }) => {

    return (
    <div className='m-5 row'>
        <div className="custom-border var-bg-blue2 col-md-8 flex-wrap mx-auto d-flex p-4">
            <div className='mx-5 var-text-light custom-text-lg col-8'>
                <h3 className='love-struck p-3 custom-underline custom-text-xxl'>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Location:</strong> {event.location}</p>
            </div>
            <div className='mx-auto my-auto justify'>
                <button className="custom-btn p-4 custom-text-md">
                    RSVP today!
                </button>
            </div>
        </div>
    </div>
    );
};

export default Event;
