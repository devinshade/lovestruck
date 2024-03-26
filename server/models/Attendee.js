const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Event = require('./Event')

const attendeeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
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
    }
});

const Attendee = model('Attendee', attendeeSchema);

module.exports = { Attendee, attendeeSchema };