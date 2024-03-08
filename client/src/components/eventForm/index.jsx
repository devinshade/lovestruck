import { useState } from 'react';
// import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function EventForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [eventId, setEvent] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [contactInfo , setContactInfo] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        // Based on the input type, we set the state of the event details
        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'event') {
            setEvent(inputValue);
        } else if (inputType === 'location') {
            setLocation(inputValue);
        } else if (inputType === 'date') {
            setDate(inputValue);
        } else if (inputType === 'contactInfo') {
            setContactInfo(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    }
    return (
        <div className="container text-center">
            <h1>Welcome {firstName}!</h1>
            <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='First Name'
                    />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        value={lastName}
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
                    value={eventId}
                    name='event'
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Event Name'
                    />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formGridLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                    value={location}
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
                        value={date}
                        name='date'
                        onChange={handleInputChange}
                        type='date'
                        placeholder='Date of Event'
                    />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formGridContactInfo">
                    <Form.Label>Contact Info</Form.Label>
                    <Form.Control
                        value={contactInfo}
                        name='contactInfo'
                        onChange={handleInputChange}
                        type='number'
                        placeholder='Phone number'
                    />
                    </Form.Group>
                </Row>
        
                <Button variant="primary" type="submit">
                    Create Event
                </Button>
            </Form>
        </div>
    )
}

export default EventForm;