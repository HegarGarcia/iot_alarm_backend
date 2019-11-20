const coap = require("coap");

const user = JSON.stringify({
    name: "adrian",
    pass: "1234"
});

const server = coap.createServer();

server.on("request", (req, res) => {
    if (req.method === "POST") {
        switch (req.url) {
            case "/device/button":
                console.log(`Enviando a ${req.url.split("/")[2]}`);
                res.end(user);
                break;
            default:
                break;
        }
    }
});

server.listen(() => {
    console.log("server started");
});
