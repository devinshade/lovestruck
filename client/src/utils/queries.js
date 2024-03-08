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


export const NUMBER_OF_ATTENDEES = gql`
  query GET_NUMBER_OF_ATTENDEES($eventId: ID!) {
   getNumberOfAttendees(eventId: $eventId)
  }
`