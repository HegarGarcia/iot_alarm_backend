const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const passport = require("passport");

const mongodb = require("./database");

const user = require("./routes/user.routes");
const auth = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./authentication/local")(passport);

app.use("/api/auth", auth);
app.use("/api/user", user);

app.listen(PORT, () => {
  mongodb.connect();
  console.log(`Server on port ${PORT}`); // eslint-disable-line no-console
});
