const { Attendee, Event, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            return User.findById(context.user._id)
        },
        user: async (parent, args, context) => {
            const user = await User.findById(context.user._id).populate('events')

            if (!user) {
                throw new Error('User not found')
            }
            
            const events = await Event.find({ 'attendees.userId': context.user._id });
            
            if (!events) {
                throw new Error('Event not found');
            }
            
            console.log("events:", user.events)

            return {
                user, 
                events
            };
        },
        events: async () => {
            const allEvents = await Event.find({}).populate('attendees');
            return allEvents;
        },
        getNumberOfAttendees: async (parent, { eventId }) => {
            const event = await Event.findById(eventId)

            if (!event) {
                throw new Error('Event not found');
            }

            const attendees = event.attendees.length;

            return attendees;
        },
        getSingleEvent: async (parents, { eventId }) => {
            const singleEvent = await Event.findById(eventId)

            if (!singleEvent) {
                throw new Error ('Error not found')
            }

            return singleEvent;
        },
        getRSVP: async (parents, { userId }, context) => {
            const user = await User.findById(userId).populate('events')
            
            return user
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        addEvent: async (parent, {hosts, title, description, date, location, contactInfo}) => {
            const event = await Event.create({hosts, title, description, date, location, contactInfo})

            return event
        },
        deleteEvent: async (parent, { eventId }) => {
            const event = await Event.deleteOne({ _id: eventId })

            if (!event) {
                throw new Error("Event not found")
            }

            return "Success!"
        },
        rsvpEvent: async (parent, { eventId, userId, attendee }) => {
            const event = await Event.findOneAndUpdate(eventId);
            
            if (!event) {
                throw new Error("Event not found");
            }
        
            const attendeeRsvp = new Attendee({
                userId: userId,
                firstName: attendee.firstName,
                lastName: attendee.lastName
            });
            
            if (!Array.isArray(event.attendees)) {
                event.attendees = [];
            }

            event.attendees.push(attendeeRsvp);
        
            await event.save();

            await User.findByIdAndUpdate(userId, { $push: { events: eventId } })

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