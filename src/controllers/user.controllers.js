const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find(); 
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const user = new User({
        fullName : req.body.fullName,
        email : req.body.email,
        password : req.body.password,
        codeMorse : req.body.codeMorse
        });
    await user.save();
    res.json({
        'status' : 'User saved.'
    });
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

module.exports = userCtrl;