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
  mutation addEvent($hosts: String, $location: String!, $date: String!, $attendees: [AttendeeInput]!) {
    addEvent(input: { hosts: $hosts, location: $location, date: $date, attendees: $attendees }) {
      _id
      hosts
      location
      date
      attendees {
        name
      }
    }
  }
`;

export const RSVP_EVENT = gql`
mutation RSVP_EVENT($eventId: ID!, $attendee: AttendeeInput!) {
  rsvpEvent(eventId: $eventId, attendee: $attendee) {
    _id
    hosts
    location
    date
    attendees {
      name
    }
  }
}
`

export const REMOVE_ATTENDEE = gql `
mutation REMOVE_ATTENDEE($eventId: ID!, $attendeeId: ID!) {
  removeAttendee(eventId: $eventId, attendeeId: $attendeeId) {
    _id
    hosts
    location
    date
    attendees {
      name
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
