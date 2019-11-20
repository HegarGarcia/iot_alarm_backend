var mongoose = require('mongoose');
var user = require('./user')


// Connection URL
var URI = 'mongodb+srv://dbUser:eZOmrJbuUmw01SUF@cluster0-xrbnk.mongodb.net/test?retryWrites=true&w=majority';

var connectDB = async ()=>{
  await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
  console.log('db connected...');

  user.find({
   firstName: 'Ismael'
 }).exec(function(err, user) {
   if (err) throw err;
   
   console.log(user);
 });
};

module.exports = connectDB;
