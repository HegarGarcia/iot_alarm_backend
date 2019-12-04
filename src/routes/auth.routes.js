const { Router } = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).send({
        message: "Something is not right",
        user
      });
    }

    return req.login(user, { session: false }, error => {
      if (error) {
        res.send(error);
      }

      const token = jwt.sign(user, process.env.JWT_SECRET);
      return res.send({ user, token });
    });
  })(req, res, next);
});

module.exports = router;
