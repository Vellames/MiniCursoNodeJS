// Importa o modulo http do node
const http = require('http');

// Cria o servidor e escuta a porta 3000
// req = Request
// res = Response
http.createServer(function(req, res) {
  res.end('Javascript no Servidor? Conheca NodeJS!');
}).listen(3000);