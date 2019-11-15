const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: false
    },
    codeMorse: {
      type: String,
      required: false
    }
  },
  {
    versionKey: false
  }
);

module.exports = model("User", userSchema);
