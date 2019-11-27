const express = require("express");
const morgan = require("morgan");

const jwt = require("jsonwebtoken");
const passport = require("passport");

const fs = require("fs");
const { promisify } = require("util");
const bodyParser = require("body-parser");

const app = express();
const readFile = promisify(fs.readFile);

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json({ extended: true }));

app.get("/jwt", async (_req, res) => {
    const privateKey = await readFile("./priv.pem", { encoding: "utf8" });
    const token = jwt.sign(
        {
            body: "stuff"
        },
        privateKey,
        {
            algorithm: "HS256"
        }
    );
    res.send(token);
});

app.use("/api/users", require("./routes/user.routes"));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
        cb(err, user);
    });
});

app.get("/api/getuser", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Users list...",
                authData
            });
        }
    });
});

app.post("/api/login", (req, res) => {
    const user = req.body;
    console.log(user);
    jwt.sign({ user }, "secretkey", { expiresIn: "24h" }, (err, token) => {
        res.json({
            token
        });
    });
});

// Format of token
// Authorization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
        // Split at the space
        const bearer = bearerHeader.split(" ");
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(
    app.get("port"),
    () => console.log("Server on port", app.get("port")) // eslint-disable-line no-console
);
