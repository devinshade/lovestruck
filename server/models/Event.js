const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Attendee } = require('./Attendee')
const dayjs = require('dayjs');

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
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
        get: function(date) {
            return dayjs(date).format('MMMM DD, YYYY');
        }
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