const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: { type : String, required : true },
    email: { type : String, required : true },
    password : { type : String, required : false },
    codeMorse : { type : String, required : false }
},
    { versionKey : false }
);

module.exports = mongoose.model('User', userSchema);