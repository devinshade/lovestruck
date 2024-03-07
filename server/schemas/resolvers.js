const { Attendee, Event, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        addEvent: async (parent, args) => {
            const event = await Event.create(args)

            return { event }
        },
        rsvpEvent: async (parent, { eventId, attendee }) => {
            const event = Event.findOneAndUpdate(eventId);

            if (!event) {
                throw new Error("Event not found")
            }

            event.attendees.push(attendee)

            await event.save();

            return event;
        },
    }
}