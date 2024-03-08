const { Attendee, Event, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id)

            if (!user) {
                throw new Error('User not found')
            }

            const events = await Event.find({ 'attendees.userId': context.user._id})

            if (!events) {
                throw new Error('Event not found');
            }

            return events;
        },
        events: async () => {
            return await Event.find();
        }
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
            
            if (!event) {
                throw new Error('Event not found');
            }

            const updateAttendee = event.attendees.find(attendee => attendee._id.toString() === attendeeId);

            updateAttendee.name = name;

            await event.save();

            return attendeeUpdate;
        },
        removeAttendee: async (parent, { eventId, attendeeId }) => {
            const event = await Event.findById(eventId);
        
            if (!event) {
                throw new Error('Event not found');
            }

            const indexToRemove = event.attendees.findIndex(attendee => attendee._id.toString() === attendeeId);
        
            if (indexToRemove === -1) {
                throw new Error('Attendee not found in the event');
            }

            event.attendees.splice(indexToRemove, 1);
        
            await event.save();
        
            return event;
        },
        getNumberOfAttendees: async (parent, { eventId }) => {
            const event = await Event.findById(eventId)

            if (!event) {
                throw new Error('Event not found');
            }

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