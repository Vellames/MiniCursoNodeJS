// Importando o modulo criado
const modulo = require('./modulo');

// Chamando atributo do modulo criado
console.log(modulo.mensagem);

// Chamando uma função do modulo criado
modulo.funcaoExportavel('Ola');

// Exception será lançada, essa função não foi exportada e portanto não pode ser chamada
//myModule.umaFuncaoNaoExportavel();