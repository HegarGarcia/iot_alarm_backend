const mongoose = require("mongoose");

const URI =
    "mongodb+srv://dbUser:eZOmrJbuUmw01SUF@cluster0-xrbnk.mongodb.net/test?retryWrites=true&w=majority";

mongoose
    .connect(URI)
    .then(() => console.log("DB is connected")) // eslint-disable-line no-console
    .catch(err => console.log(err)); // eslint-disable-line no-console

module.exports = mongoose;
