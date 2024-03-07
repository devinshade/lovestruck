const { Attendee, Event, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id)

            const events = await Event.find({ 'attendees.userId': context.user._id})

            return events;
        },
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
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
        }
    }
}

module.exports = resolvers