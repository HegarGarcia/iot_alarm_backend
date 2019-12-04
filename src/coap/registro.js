const mongoose = require("mongoose");

const Registros = new mongoose.Schema({
    name: {
        type: String
    },
    morseCode: {
        type: String
    },
    timestamp: {
        type: Date
    }
});

const Registro = mongoose.model("Registros", Registros);

module.exports = Registro;