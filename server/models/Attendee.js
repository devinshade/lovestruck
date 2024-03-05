const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Event = require('./Event')

const attendeeSchema = new Schema({
    name: {
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