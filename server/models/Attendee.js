const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Event = require('./Event')

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
    // plusOne: {
    //     required: false,
    //     type: plusOneSchema
    // }
    // this is if I can get it working by class time
});

const Attendee = model('Attendee', attendeeSchema);

module.exports = { Attendee, attendeeSchema };