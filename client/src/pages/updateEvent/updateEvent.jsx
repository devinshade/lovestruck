import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SINGLE_EVENT } from '../../utils/queries'
import { UPDATE_EVENT } from '../../utils/mutations'
import { Button, Col, Form, Row, Card } from 'react-bootstrap'

const UpdateEvent = () => {
    const { eventId } = useParams();
    const [updateEvent] = useMutation(UPDATE_EVENT);
    const { data: eventData } = useQuery(QUERY_SINGLE_EVENT, {
        variables: { eventId }
    });

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        title: '',
        location: '',
        description: '',
        date: '',
        contactInfo: ''
    });

    useEffect(() => {
        if (eventData && eventData.getSingleEvent) {
            const { firstName, lastName, title, location, description, date, contactInfo } = eventData.getSingleEvent;
    
            const parsedDate = new Date(date);
    
            const formattedDate = parsedDate.toISOString().split('T')[0];
    
            setFormData({ firstName, lastName, title, location, description, date: formattedDate, contactInfo });
        }
    }, [eventData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEvent({ variables: { eventId: eventId, input: { ...formData } } });
            window.location.href = "../events";
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        // Here Tyler
        // dont know why it's displaying weird on the page here
        <div className="container text-center">
            <h1>Update your wedding now!</h1>
            <Card className="container text-center " style={{ width: '100%' }}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                value={formData.firstName}
                                name="firstName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder='First Name'
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={formData.lastName}
                                name="lastName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder='Last Name'
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridtitle">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            value={formData.title}
                            name='title'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Event Name'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={formData.description}
                            name='description'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Description of Event'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            value={formData.location}
                            name='location'
                            onChange={handleInputChange}
                            type='text'
                            placeholder='Location of Event'
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                value={formData.date}
                                name='date'
                                onChange={handleInputChange}
                                type='date'
                                placeholder='Date of Event'
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridContactInfo">
                            <Form.Label>Contact Info</Form.Label>
                            <Form.Control
                                value={formData.contactInfo}
                                name='contactInfo'
                                onChange={handleInputChange}
                                type='tel'
                                placeholder='Phone number'
                            />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Update Event
                    </Button>
                </Form>
            </Card>
        </div>
    );
}

export default UpdateEvent;