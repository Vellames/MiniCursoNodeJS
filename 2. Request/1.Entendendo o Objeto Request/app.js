// Importa o modulo http do node
const http = require('http');

// Cria o servidor e escuta a porta 3000
// req = Request
// res = Response
http.createServer(function(req, res) {
  // Exibe no console o objeto da requisição
  console.log(req);

  // Recupera por exemplo o navegador do cliente
  res.end(req.headers['user-agent']);
}).listen(3000);