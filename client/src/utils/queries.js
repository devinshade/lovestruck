import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      events {
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
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      firstName
      lastName
      title
      location
      description
      date
      contactInfo
      attendees {
<<<<<<< HEAD
        firstName
        lastName
        plusOne {
          firstName
          lastName
        }
=======
        _id
        firstName
        lastName
>>>>>>> 690a39c8cc9c680507bdced09130b9bbf8726523
      }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
<<<<<<< HEAD
  query getSingleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      hosts
      description
      location
      date
      attendees {
        firstName
        lastName
        plusOne {
          firstName
          lastName
        }
      }
=======
  query getSingleEvent($eventtId: ID!){
  event(eventId: $eventId) {
    _id
    firstName
    lastName
    description
    location
    date
    attendees {
      _id
      firstName
      lastName
    }
>>>>>>> 690a39c8cc9c680507bdced09130b9bbf8726523
    }
  }
`;

export const NUMBER_OF_ATTENDEES = gql`
  query GET_NUMBER_OF_ATTENDEES($eventId: ID!) {
   getNumberOfAttendees(eventId: $eventId) {
    attendees {
      _id
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
      firstName
      lastName
      location
      date
      attendees {
        _id
        firstName
        lastName
<<<<<<< HEAD
        plusOne {
          firstName
          lastName
        }
=======
>>>>>>> 690a39c8cc9c680507bdced09130b9bbf8726523
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
<<<<<<< HEAD
      plusOne {
        firstName
        lastName
      }
=======
>>>>>>> 690a39c8cc9c680507bdced09130b9bbf8726523
    }
  }
}
`;