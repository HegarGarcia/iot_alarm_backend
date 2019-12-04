const coap = require("coap");
// or coap
const server = coap.createServer();
require("./db");

const { getUserPin } = require("./controller");

server.on("request", (req, res) => {
    if (req.method === "POST") {
        switch (req.url) {
            case "/device/button": {
                const pinCodeString = req.payload.toString();
                const pinCode = JSON.parse(pinCodeString).code;
                getUserPin(pinCode).then(data => {
                    const payload = {
                        user: {}
                    };
                    if (data == null) {
                        res.code = "4.03";
                    } else {
                        const { name, morseCode } = data;

                        res.code = "2.05";
                        payload.user = { name, morseCode };
                    }
                    res.end(JSON.stringify(payload));
                });
                break;
            }
            default:
                break;
        }
    }
    // res.on("finish", function(err){
    //     const errorMessage = {
    //         message: "An error has occurred, no more client response",
    //         errorCode: "OUTGOING MESSAGE FINISH EVENT ERROR"
    //     }
    //     if(err){
    //         errorMessage["errorMessage"] = err.message
    //     }
    //     console.log(JSON.stringify(errorMessage))
    //     res.code = '5.01';
    //     res.end()
    // })
    res.on("error", err => {
        const errorMessage = {
            message: "An error has occurred, no more client response",
            errorCode: "OUTGOING MESSAGE FINISH EVENT ERROR"
        };
        if (err) {
            errorMessage.errorMessage = err.message;
        }
        // console.log(JSON.stringify(errorMessage));
        res.code = "5.01";
        res.end();
    });
});

server.on("error", err => {
    const errorMessage = {
        message: "An error has occurred with the server",
        errorCode: "Internal Server Error"
    };
    if (err) {
        errorMessage.messageError = err.message;
    }
    server.close();
});

server.listen(() => {});
