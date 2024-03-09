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

export const QUERY_EVENTS = gql`
  query getEvents() {
    events {
      _id
      hosts
      description
      date
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