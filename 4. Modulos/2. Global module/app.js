// Importando o modulo criado
// Nada acontece, o modulo é uma função, ele precisa ser chamado
const modulo = require('./modulo');

// Diferença básica entre exports e module.exports
/*
  module.exports permite que voce chame seu modulo como uma função,
  voce pode usar isso para criar uma especie de construtor
  use module.exports!
*/
var instancia = modulo('Javascript no Servidor? Conheça NodeJS!');
console.log(instancia.maiusculo());
console.log(instancia.minusculo());

var instancia2 = modulo('Cassiano Vellames');
console.log(instancia2.maiusculo());
console.log(instancia2.minusculo());