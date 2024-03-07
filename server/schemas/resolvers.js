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
        updateAttendee: async (parents, { eventId, attendeeId, name }) => {
            const event = Event.findById(eventId);

            const updateAttendee = event.attendees.find(attendee => attendee._id.toString() === attendeeId);

            updateAttendee.name = name;

            await event.save();

            return attendeeUpdate;
        },
        allAttendees: async (parent, { eventId }) => {
            const event = await Event.findById(eventId)

            const attendees = event.attendees.length;

            return attendees;
        }
    }
}