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
        name: String
    }

    type Event {
        _id: ID
        hosts: String
        location: String
        date: String
        attendees: [Attendee]
    }

    input AttendeeInput {
        name: String
    }

    type Query {
        me: User
        user: User
        events: [Event]
        getNumberOfAttendees(eventId: ID!): Int
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(hosts: String!, location: String!, date: String!): Event
        rsvpEvent(eventId: ID!, attendee: AttendeeInput!): Event
        updateAttendee(eventId: ID!, attendeeId: ID!, name: String!): Attendee
        removeAttendee(eventId: ID!, attendeeId: ID!): Event
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs