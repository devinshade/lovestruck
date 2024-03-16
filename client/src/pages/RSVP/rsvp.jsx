import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { RSVP_EVENT } from '../../utils/mutations';
import Form from 'react-bootstrap/Form';

import Events from '../Events/allEvents'

const RSVPForm = () => {
    const { eventId } = useParams(); 
    const [rsvpState, setRsvpState] = useState({firstName: '', lastName: ''})

    const [rsvpEvent, { data }] = useMutation(RSVP_EVENT)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setRsvpState({
            ...rsvpState,
            [name]: value
        })
    };

    const handleRSVP = async (event) => {
        event.preventDefault();

        try {
            const { data } = await rsvpEvent({
                variables: {
                    eventId: eventId,
                    mainAttendee: {
                        firstName: rsvpState.firstName,
                        lastName: rsvpState.lastName
                    }
                }
            })

            window.location.href = "../events";
        } catch (err) {
            throw new Error(err)
        }
    }

    return (
        <div>
            <Form onSubmit={handleRSVP}>
                <Form.Control
                    value={rsvpState.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='First Name'
                />
                <Form.Control
                    value={rsvpState.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Last Name'
                />
                <button type='submit'>
                    RSVP!
                </button>
            </Form>
        </div>
    )
}

export default RSVPForm