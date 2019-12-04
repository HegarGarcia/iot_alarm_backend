const mongoose = require("mongoose");

// Connection URL
const URI =
    "mongodb+srv://dev:qP1lDGQV5p7MgCHG@iot-alarm-cluster-avzd5.gcp.mongodb.net/development?retryWrites=true&w=majority";

mongoose.connect(
    URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    error => {
        if (!error) {
            // console.log("Mongo connected succesfully");
        } else {
            // console.log(error);
        }
    }
);
