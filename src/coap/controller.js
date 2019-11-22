const coap = require("coap");
const connection = require("./db");

const req = coap.request({
    hostname: "localhost",
    pathname: "/device/button",
    method: "POST"
});

// req.on("response", res => {
//     const data = res.payload;
//     JSON.parse(data);
// });

connection();

req.end();

/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const url = 'mongodb+srv://adrian:adrian1234@testiot-lvhsh.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  const db = client.db("test")
  
  var result = db.collection('test').findOne({
    "user": "adrian",
    "pass": "1234"
  })

  result.then((data) => console.log(data))

  client.close()
}); */
