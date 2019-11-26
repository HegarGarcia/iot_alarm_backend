const coap = require("coap");
// or coap
const server = coap.createServer();
require("./db");
const { getUserPin } = require("./controller");

server.on("request", function(req, res) {
    if (req.method === "POST") {
        switch (req.url) {
            case "/device/button": {
              const pinCodeString = req.payload.toString();
              const pinCode = JSON.parse(pinCodeString).code;
              getUserPin(pinCode).then(data => res.end(JSON.stringify(data)));
              break;
            }
            default:
                break;
        }
    }
});

server.listen(function() {
    console.log("server started");
});
