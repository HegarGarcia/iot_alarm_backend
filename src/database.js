const mongoose = require("mongoose");

const URI = "mongodb://localhost/iot-app";

mongoose
    .connect(URI)
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err));

module.exports = mongoose;
