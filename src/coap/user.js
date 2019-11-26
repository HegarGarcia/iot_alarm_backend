const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    name: {
        type: String
    },
    pin_code: {
        type: String
    }
});

const User = mongoose.model("Users", Users);

module.exports = User;
