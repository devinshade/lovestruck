import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { RSVP_EVENT } from '../../utils/mutations';
import Form from 'react-bootstrap/Form';

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
                    attendee: {
                        firstName: rsvpState.firstName,
                        lastName: rsvpState.lastName
                    }
                }
            })

            window.location.href = "../events";
        } catch (err) {
            console.error(err)
            throw new Error(err)
        }
    }

    return (
        <div className='fullPage container mx-auto pt-5'>
            <div className='row justify-center'>
                <div className="col-3 text-center" id="img-container">
                    <img className="login-img custom-border" src="images/Photo1.png" alt="A couple getting married"/>
                    <img className="login-img custom-border" src="images/Photo3.png" alt="A couple getting married"/>
                </div>
                <div className='col-5 var-bg-blue2 custom-border var-text-light'>
                    <div className='m-5'>
                        <h1 className='text-center custom-underline'>RSVP Below!</h1>
                        <Form onSubmit={handleRSVP}>
                            <Form.Control
                                value={rsvpState.firstName}
                                name="firstName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder='First Name'
                                className='my-3'
                            />
                            <Form.Control
                                value={rsvpState.lastName}
                                name="lastName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder='Last Name'
                                className='my-3'
                            />
                            <div className='text-center'>
                                <button type='submit'
                                    className="custom-btn p-3 px-5 custom-text-md mt-5"
                                    style={{ cursor: 'pointer' }}
                                    >
                                    RSVP!
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-3 text-center" id="img-container">
                    <img className="login-img custom-border" src="images/Photo6.png" alt="A couple getting married"/>
                    <img className="login-img custom-border" src="images/Photo2.png" alt="A couple getting married"/>
                </div>
            </div>
        </div>
    )
}

export default RSVPForm