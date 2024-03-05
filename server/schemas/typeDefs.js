const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Event {
        _id: ID
        couple: String
        location: String
        date: String
    }

    type Query {
        user: User
        events: [Event]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addEvent(couple: String!, location: String!, date: String!): Event
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs