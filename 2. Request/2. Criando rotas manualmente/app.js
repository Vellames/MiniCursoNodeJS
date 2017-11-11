// Importa o modulo http do node
const http = require('http');

// Cria o servidor e escuta a porta 3000
// req = Request
// res = Response
http.createServer(function(req, res) {
  // Envia diferentes respostas baseadas na requisição do usuário
  switch(req.url) {
    case '/':
      res.end('Home Page');
    case '/about':
      res.end('Sobre');
    case '/contact':
      res.end('Contato');
    default:
      // Envia o status de pagina não encontrada
      // Caso o statusCode não seja enviado, o padrão é 200 (Ok)
      res.statusCode = 404;
      res.end('404 - Pagina nao existente');
  }
}).listen(3000);