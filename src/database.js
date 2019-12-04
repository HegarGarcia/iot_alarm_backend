const mongoose = require("mongoose");

const URI = process.env.MONGO_BD_URL;

const connect = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit();
  }
};

module.exports = { connect };
