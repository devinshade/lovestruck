import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
        username
      }
    }
  }
`;

export const ADD_EVENT = gql `
  mutation addEvent($hosts: String, $location: String!, $date: String!, $attendees: AttendeeInput!)
    addEvent(input: AttendeeInput) {
      _id: ID
      hosts: String
      location: String
      date: String
      attendee: [Attendees] // not sure about this yet
    }
`

export const RSVP_EVENT = gql `
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