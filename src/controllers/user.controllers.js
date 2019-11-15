const User = require("../models/user.model");

const getAllUsers = async (_req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  await new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    codeMorse: req.body.codeMorse
  }).save();

  res.json({
    status: "User saved."
  });
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

module.exports = { getUserById, getAllUsers, createUser };
