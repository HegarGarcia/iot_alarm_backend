const passportJwt = require("passport-jwt");
const User = require("../models/user.model");

const { ExtractJwt, Strategy: JwtStrategy } = passportJwt;

const strategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  },
  (payload, done) => {
    // eslint-disable-next-line no-underscore-dangle
    User.findById(payload._id, (err, user) => {
      if (err) {
        done(err);
      }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }
);

module.exports = passport => passport.use(strategy);
