const coap = require("coap");

const server = coap.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST") {
    switch (req.url) {
      case "/device/button":
        res.send("data");
        break;
      default:
        break;
    }
  }
});

server.listen(() => {
  console.log("server started");
});
