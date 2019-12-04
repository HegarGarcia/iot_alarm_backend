const mongoose = require("mongoose");

const Registro = new mongoose.Schema({
    name: {
        type: String
    },
    morseCode: {
        type: String
    },
    timestamp: {
        type: Date.now()
    }
});

const Registro = mongoose.model("Registros", Registros);

module.exports = Registro;