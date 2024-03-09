<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
=======
const { Schema, model } = require('mongoose');
>>>>>>> 30cc404 (created the user model for now)
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
<<<<<<< HEAD
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
=======
        username: {
            type: String,
            required: true,
            unique: true,
          },
          email: {
>>>>>>> 30cc404 (created the user model for now)
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
<<<<<<< HEAD
        },
        password: {
            type: String,
            required: true,
        },
=======
          },
          password: {
            type: String,
            required: true,
          },
>>>>>>> 30cc404 (created the user model for now)
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;