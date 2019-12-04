const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongodb = require("./database");

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./authentication/local")(passport);
require("./authentication/jwt")(passport);

app.use("/api/auth", auth);
app.use("/api/user", passport.authenticate("jwt", { session: false }), user);

app.listen(PORT, () => {
  mongodb.connect();
  console.log(`Server on port ${PORT}`); // eslint-disable-line no-console
});
