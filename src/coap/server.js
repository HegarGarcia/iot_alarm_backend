var user = JSON.stringify({
  name: "adrian",
  pass: "1234"
})

const coap    = require('coap') // or coap
    , server  = coap.createServer()

server.on('request', function(req, res) {
  if(req.method === 'POST'){
    switch (req.url){
      case '/device/button':
        console.log('Enviando a ' + req.url.split('/')[2])
        res.end(user)
    }
  }
})

server.listen(function() {
  console.log('server started')
})