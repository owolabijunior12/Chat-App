const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageURl: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;