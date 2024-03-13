import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      hosts
      location
      date
      attendees {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query getSingleEvent($eventtId: ID!){
  event(eventId: $eventId) {
    _id
    hosts
    description
    location
    date
    attendees {
      _id
      firstName
      lastName
    }
    }
  }
`;

export const NUMBER_OF_ATTENDEES = gql`
  query GET_NUMBER_OF_ATTENDEES($eventId: ID!) {
   getNumberOfAttendees(eventId: $eventId) {
    _id
   }
  }
`

export const USER = gql `
  query User {
    user {
      _id
      firstName
      lastName
      email
      events {
        _id
        title
        date
        location
        description
      }
    } 
  }
`

export const EVENT = gql`
  query {
    events {
      _id
      hosts
      location
      date
      attendees {
        _id
        firstName
        lastName
      }
    }
  }
`

export const GET_RSVPS = gql`
query GetRSVPs($userId: ID!) {
  event(userId: $userId) {
    _id
    attendees {
      _id
      firstName
      lastName
    }
  }
}
`;