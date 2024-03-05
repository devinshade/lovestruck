const typeDefs = `
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
        user: User
        events: [Event]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(couple: String!, location: String!, date: String!): Event
        rsvpEvent(eventId: ID!, attendee: AttendeeInput!): Event
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs