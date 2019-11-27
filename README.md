# Backend

### HTTP
This part of the project follows:

- **[NodeJS](https://nodejs.org/es/docs/)**: NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.

- **[ExpressJS](https://expressjs.com/en/5x/api.html)**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applcations.

- **[Mongoose](https://mongoosejs.com/docs/guide.html)**: *Elegant mongodb object modeling for node.js*. Mongoose provides a straight-forward, schema-based solution to model your application data.

- **[Nodemon](https://github.com/remy/nodemon#nodemon)**: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

- **[PassportJS](http://www.passportjs.org/docs/)**: Passport is authenctication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web applcation. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

- **[Morgan](https://github.com/expressjs/morgan)**: Morgan is a great logging tool that anyone who works with HTTP servers in Node.js should learn to use. Morgan is a middleware that allows us to easily log request, errors, and more to the console. It´s easy to use, but still powerful and customizable.

- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Dotenv is a zerp-dependency module that loads environment baribales from a `.env` file into **`process.env`**.

- **[JWT](https://jwt.io/introduction/)**: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

### **Usage JWT**
As early as possible in the application, require and authenticate *JWT*.

**jwt.sign(payload, privateKey, {options})**

`Payload` be an object literal, buffer or string representing valid JSON.

`privateKey` is a string, buffer, or object containing either the secret for HMAC algorithms or the PEM encoded key.

`options`:
- `algorithm`: (default: *HS256*)
- `expiresIn`: expressed in seconds or a string describing a time span **zeit/ms**.
> Ex: 60, "2 days", "10h", "7d".


### Backend coap
This part of the project follows:

- **[Coap](https://coap.technology/)**: CoAP is a specialized web transfer protocol for use with constrained nodes and constrained networks in the Internet of Things.

- **[Mongoose](https://mongoosejs.com/)**: *Elegant mongodb object modeling for node.js*. Mongoose provides a straight-forward, schema-based solution to model your application data.


