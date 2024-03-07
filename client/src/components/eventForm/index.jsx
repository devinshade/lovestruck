import { useState } from 'react';
import './style.css';

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [user, setUser] = useState('');
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
        if (inputType === 'user') {
            setUser(inputValue);
        } else if (inputType === 'userId') {
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
            <h1>Welcome {user}!</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={user}
                    name="user"
                    onChange={handleInputChange}
                    type="user"
                    placeholder='Preferred Name'
                />
                <input 
                    value={eventId}
                    name='event'
                    onChange={handleInputChange}
                    type='event'
                    placeholder='Event Name'
                />
                <input 
                    value={location}
                    name='location'
                    onChange={handleInputChange}
                    type='location'
                    placeholder='Location of Event'
                />
                <input 
                    value={date}
                    name='date'
                    onChange={handleInputChange}
                    type='date'
                    placeholder='Date of Event'
                />
                <input 
                    value={contactInfo}
                    name='contactInfo'
                    onChange={handleInputChange}
                    type='contactInfo'
                    placeholder='Contact Information'
                />
            </form>
        </div>
    )
}

export default Form;