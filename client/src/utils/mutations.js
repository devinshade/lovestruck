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
mutation AddEvent($hosts: String!, $title: String!, $location: String!, $date: String!, $contactInfo: String!) {
  addEvent(hosts: $hosts, title: $title, location: $location, date: $date, contactInfo: $contactInfo) {
    hosts
    title
    location
    date
    contactInfo
    attendees {
      _id
      name
    }
  }
}
`;

export const RSVP_EVENT = gql`
mutation RsvpEvent($eventId: ID!, $userId: ID!, $mainAttendee: AttendeeDetails!) {
  rsvpEvent(eventId: $eventId, userId: $userId, mainAttendee: $mainAttendee) {
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

export const DELETE_EVENT = gql `
  mutation DELETE_EVENT($eventId: ID!) {
    deleteEvent(eventId: $eventId) {
      _id
    }
  }
`