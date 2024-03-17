import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent($firstName: String!, $lastName: String!, $title: String!, $location: String!, $date: String!, $description: String, $contactInfo: String!) {
    addEvent(firstName: $firstName, lastName: $lastName, title: $title, location: $location, date: $date, description: $description, contactInfo: $contactInfo) {
      firstName
      lastName
      title
      location
      date
      description
      location
      contactInfo
    }
  }
`;

export const RSVP_EVENT = gql`
mutation RsvpEvent($eventId: ID!, $mainAttendee: AttendeeDetails!) {
  rsvpEvent(eventId: $eventId, mainAttendee: $mainAttendee) {
    _id
    lastName
    title
    location
    date
    description
    location
    contactInfo
    attendees {
      firstName
      lastName
      plusOne {
        firstName
        lastName
      }
    }
  }
}
`

export const REMOVE_ATTENDEE = gql `
mutation REMOVE_ATTENDEE($eventId: ID!, $attendeeId: ID!) {
  removeAttendee(eventId: $eventId, attendeeId: $attendeeId) {
    _id
    firstName
    lastName
    location
    date
    attendees {
      firstName
      lastName
    }
  }
}
`

export const UPDATE_ATTENDEE = gql`
  mutation UPDATE_ATTENDEE($eventId: ID!, $attendeeId: ID!, $name: String!) {
    updateAttendee(eventId: $eventId, attendeeId: $attendeeId, name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_EVENT = gql `
  mutation DELETE_EVENT($eventId: ID!) {
    deleteEvent(eventId: $eventId) {
      _id
    }
  }
`

export const UPDATE_EVENT = gql`
    mutation UpdateEvent($eventId: ID!, $input: EventInput!) {
        updateEvent(eventId: $eventId, input: $input) {
            _id
            firstName
            lastName
            title
            location
            date
            description
            contactInfo
        }
    }
`;