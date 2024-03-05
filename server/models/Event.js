const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    couple: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event