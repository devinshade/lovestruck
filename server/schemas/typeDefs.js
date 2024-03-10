const typeDefs = `
    type Auth {
        token: ID
        user: User
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Attendee {
        _id: ID
        name: String
    }

    type Event {
        _id: ID
        hosts: String
        title: String
        location: String
        date: String
        description: String
        attendees: [Attendee]
    }

    input AttendeeInput {
        _id: ID
        name: String
    }

    type Query {
        me: User
        user: User
        events: [Event]
        getNumberOfAttendees(eventId: ID!): Int
        getSingleEvent(eventId: ID!): Event
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(hosts: String!, title: String!, location: String!, date: String!): Event
        rsvpEvent(eventId: ID!, attendee: AttendeeInput!): Event
        updateAttendee(eventId: ID!, attendeeId: ID!, name: String!): Attendee
        removeAttendee(eventId: ID!, attendeeId: ID!): Event
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs