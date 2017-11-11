// Modulo File System nativo do Node
const fs = require('fs');

// Primeiro é feita a leitura dos arquivos para que o proximo comando seja executado
console.log(fs.readdirSync('/home/vellames/Documents/'));
console.log('-------------------');
console.log('Bloqueante');
console.log('-------------------');

// Na forma abaixo tudo é feito de forma assincrona, o node não espera o comando ser executado para
// executar o proximo
fs.readdir('/home/vellames/Documents/', function(err, files) {
  console.log(files);
})
console.log('-------------------');
console.log('Não Bloqueante');
console.log('-------------------');