const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const dateFormat = require('../utils/dateFormat')
const { Attendee } = require('./Attendee')

// todo: Devin to add dateFormat - reference MERN activity 16
// if this is similar to handlebars - try implementing on the pages themselves

const eventSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    contactInfo: {
        type: String,
        required: true,
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
    ],
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event