const User = require("./user");
const Registro = require('./registro');


const getUserPin = async pinCode => {
    const result = pinCode.toString();

    Registro.create({ name: 'example', morseCode: result }, function (err, small) {
        if (err) return handleError(err);
        // saved!
    });
    return User.findOne({ morseCode: result }).select("-_id");
};

module.exports = { getUserPin };
