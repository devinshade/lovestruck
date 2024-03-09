import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query getSingleEvent($eventtId: ID!)
  event(eventId: $eventId) {
    _id
    hosts
    description
    location
    date
    attendees {
      name
    }
  }
`;

export const NUMBER_OF_ATTENDEES = gql`
  query GET_NUMBER_OF_ATTENDEES($eventId: ID!) {
   getNumberOfAttendees(eventId: $eventId)
  }
`

export const USER = gql `
  query User($firstName: String!, $lastName: String!) {
    user {
      _id: ID
      firstName: String
      lastName: String
      email: String
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
        name
      }
    }
  }
`
