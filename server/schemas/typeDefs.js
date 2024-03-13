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
        events: [Event]
    }

    type Attendee {
        _id: ID
        firstName: String
        lastName: String
    }

    type Event {
        _id: ID
        hosts: String
        title: String
        location: String
        date: String
        description: String
        contactInfo: String
        creator: User
        attendees: [Attendee]
    }

    input AttendeeInput {
        userId: ID
        firstName: String
        lastName: String
    }

    type Query {
        me: User
        user: User
        events: [Event]
        getNumberOfAttendees(eventId: ID!): Int
        getSingleEvent(eventId: ID!): Event
        getRSVP(userId: ID!): Event
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(hosts: String!, title: String!, location: String!, date: String!, description: String, contactInfo: String!): Event
        deleteEvent(eventId: ID!): Event
        rsvpEvent(eventId: ID!, userId: ID!, attendee: AttendeeInput!): Event
        updateAttendee(eventId: ID!, attendeeId: ID!, name: String!): Attendee
        removeAttendee(eventId: ID!, attendeeId: ID!): Event
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs