const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { promisify } = require("util");

const app = express();
const readFile = promisify(fs.readFile);

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());

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

app.listen(
    app.get("port"),
    () => console.log("Server on port", app.get("port")) // eslint-disable-line no-console
);
