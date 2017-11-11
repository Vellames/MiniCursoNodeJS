function count(callback) {
  const mensagem = 'Acabei';
  for(var i = 0; i <= 10; i++) {
    console.log(i);
  }
  callback(mensagem);
}

count(function(mensagem) {
  console.log(mensagem);
});