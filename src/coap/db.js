const mongoose = require("mongoose");

// Connection URL
const URI =
    "mongodb+srv://Adrian:test1234@cluster0-bmnrq.mongodb.net/iot?retryWrites=true&w=majority";

mongoose.connect(
    URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    error => {
        if (!error) {
            console.log("Mongo connected succesfully");
        } else {
            console.log(error);
        }
    }
);
