const mongoose = require("mongoose");

const URI = "mongodb://localhost/iot-app";

mongoose
    .connect(URI)
    .then(() => console.log("DB is connected")) // eslint-disable-line no-console
    .catch(err => console.log(err)); // eslint-disable-line no-console

module.exports = mongoose;
