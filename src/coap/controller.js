const User = require("./user");

const getUserPin = async pinCode => {
    const result = pinCode.toString();
    return User.findOne({ pin_code: result }).select("-_id");
};

module.exports = { getUserPin };
