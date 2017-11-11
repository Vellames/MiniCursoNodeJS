/*
  O node irá realizar a leitura linha a linha do arquivo
  e exportara o conteudo do objeto exports!
*/
console.log("Li essa linha");
var umaFuncaoNaoExportavel = function() {
  console.log("Eu não serei exportada");
}

exports.mensagem = "Serei exportado!";
exports.funcaoExportavel = function(texto) {
  console.log(texto);
}