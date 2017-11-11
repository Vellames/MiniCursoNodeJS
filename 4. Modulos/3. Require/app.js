/**
 * Atenção para as seguintes regras durante a importação:
 * 
 * Se a string se inicia com ./ o node entenderá que você está falando de um modulo local, o caminho aqui é relativo
 * 
 * Se a string não se inicia com ./ o node entenderá que voce esta falando de um modulo do core ou do node_modules
 */

 // Modulo core do NodeJS
 const http = require('http');

 // Modulo local da aplicação a partir do caminho relatívo
 const modulo = require('./modulo')();

 // Esse modulo não existe
 //const modulo2 = require('modulo');