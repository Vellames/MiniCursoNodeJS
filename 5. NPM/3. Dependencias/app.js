/*
  npm install = Instala todos os modulos no package.json
  npm install <module> --save = Instala modulo no projeto e adiciona ao package.json
  npm install <module> -g = Instala o modulo como global, mas nao adiciona ao package.json

  npm remove <module> = Remove modulo do projeto
  npm remove <module> --save = Remove modulo e retira do package.json
  npm remove <module> -g = Remove modulo dos globais do node

  --save-dev vs --save
  --save = Modulos necessários para produção
  --save-dev = Modulos necessários apenas para desenvolvimento (ex: bibliotecas de testes)

  Usando npm install --production apenas as dependencias de produção serão baixadas, o mesmo vale
  se sua variavel de ambiente NODE_ENV tiver o valor production

  node_modules = Pasta com todos os modulos baixados, geralmente não se commita essa pasta pois o comando npm install
  instala todas as dependencias novamente


*/

const ip = require('ip');
console.log(ip.address())