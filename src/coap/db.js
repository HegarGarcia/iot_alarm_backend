const mongoose = require("mongoose");
const User = require("./user");

const URI =
    "mongodb+srv://dbUser:eZOmrJbuUmw01SUF@cluster0-xrbnk.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("db connected...");

    User.find({
        firstName: "Ismael"
    }).exec((err, user) => {
        if (err) throw err;

        console.log(user);
    });
};

module.exports = connectDB;
