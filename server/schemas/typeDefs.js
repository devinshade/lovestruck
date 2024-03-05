const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Event {
        location: String
        date: String
    }

    type Query {
        user: User
        events: [Event]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(location: String!, date: String!): Event
    }
`