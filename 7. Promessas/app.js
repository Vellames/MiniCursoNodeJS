const promise = new Promise(function(resolve, reject) {
  for(var i = 0; i <= 10; i++) {
    console.log(i);
  }
  resolve('Acabei');
});

promise.then(function(msg) {
  console.log(msg);
})

// Refinando um pouco mais!
/*
const isPair = function(number) {
  return new Promise(function(resolve, reject) {
    if(number % 2 == 0) {
      resolve();
    } else {
      reject();
    }
  });
}

isPair(2).then(() => {
  console.log('É par');
}).catch(() => {
  console.log('É impar');
})

isPair(1).then(() => {
  console.log('É par');
}).catch(() => {
  console.log('É impar');
})
*/