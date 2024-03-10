const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Attendee } = require('./Attendee')

// todo: Devin to add dateFormat - reference MERN activity 16

const eventSchema = new Schema({
    hosts: {
        type: String,
        required: true,
        trim: true
    },
    title: {
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
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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