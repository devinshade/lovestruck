const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Event = require('./Event')

const plusOneSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
})

const attendeeSchema = new Schema({
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    rsvp: {
        type: Boolean
    },
    plusOne: {
        required: false,
        type: plusOneSchema
    },
});

const Attendee = model('Attendee', attendeeSchema);

module.exports = { Attendee, attendeeSchema };