const User = require("../models/user.model");

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { fullName, email, password, codeMorse } = req.body;

  try {
    const user = await User.create({
      fullName,
      email,
      password,
      codeMorse
    });

    // eslint-disable-next-line no-underscore-dangle
    res.send(user._id);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserById, getAllUsers, createUser };
