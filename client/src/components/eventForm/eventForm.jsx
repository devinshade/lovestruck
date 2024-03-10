import { useState } from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const EventForm = (props) => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        event: '',
        description: '',
        location: '', 
        date: '',
        contactInfo: ''
    });

    const [addEvent, { error, data }] = useMutation(ADD_EVENT);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target

        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);
        try {
            const { data } = await addEvent({
                variables: { ...formState },
            });
        
        Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            firstName: '',
            lastName: '',
            event: '',
            description: '',
            location: '', 
            date: '',
            contactInfo: ''
        })
    }
    return (
        <div className="container text-center">
            <h1>Welcome {formState.firstName}!</h1>
            <Card className="container text-center" style={{ width: '44rem' }}>
                <Form onSubmit={handleFormSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            value={formState.firstName}
                            name="firstName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='First Name'
                        />
                        </Form.Group>
            
                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            value={formState.lastName}
                            name="lastName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Last Name'
                        />
                        </Form.Group>
                    </Row>
            
                    <Form.Group className="mb-3" controlId="formGridEventName">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                        value={formState.event}
                        name='event'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Event Name'
                        />
                    </Form.Group>

                    {/* ! TODO: Add field for description */}
                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        value={formState.description}
                        name='description'
                        onChange={handleInputChange}
                        type='text'
                        placeholder='Description of Event'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                        value={formState.location}
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
                            value={formState.date}
                            name='date'
                            onChange={handleInputChange}
                            type='date'
                            placeholder='Date of Event'
                        />
                        </Form.Group>
            
                        <Form.Group as={Col} controlId="formGridContactInfo">
                        <Form.Label>Contact Info</Form.Label>
                        <Form.Control
                            value={formState.contactInfo}
                            name='contactInfo'
                            onChange={handleInputChange}
                            type='tel'
                            placeholder='Phone number'
                        />
                        </Form.Group>
                    </Row>
            
                    <Button variant="primary" type="submit">
                        Create Event
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default EventForm;