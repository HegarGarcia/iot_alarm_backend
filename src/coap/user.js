const mongoose = require("mongoose");

const Users = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        morseCode: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false
    }
);

const User = mongoose.model("Users", Users);

module.exports = User;
