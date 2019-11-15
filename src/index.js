const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const app = express();

// dotenv
app.get("/", (req, res) => {
    res.send(process.env.db_password);
});

// jwt
app.get("/secret", (req, res) => {
    res.json({
        message: "Super secret message"
    });
});

app.get("/readme", (req, res) => {
    res.json({
        message: "Hello world!"
    });
});

app.get("/jwt", (req, res) => {
    const privateKey = fs.readFileSync("./priv.pem", "utf8");
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

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/users", require("./routes/user.routes"));

// starting server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
