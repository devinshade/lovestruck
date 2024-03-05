const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Attendee  = require('./Attendee')


const eventSchema = new Schema({
    hosts: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    attendees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Attendee'
        }
    ]
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event