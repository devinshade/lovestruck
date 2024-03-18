const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const attendeeSchema = new Schema({
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

module.exports = Attendee;