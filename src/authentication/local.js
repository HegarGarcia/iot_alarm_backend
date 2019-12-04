const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  (email, password, done) => {
    User.findOne({ email, password }, (error, user) => {
      if (error) {
        done(error);
      }

      if (!user) {
        return done(null, false, {
          message: "Incorrect email or password."
        });
      }

      return done(null, user.toJSON(), { message: "Logged In Successfully." });
    });
  }
);

module.exports = passport => passport.use(strategy);
