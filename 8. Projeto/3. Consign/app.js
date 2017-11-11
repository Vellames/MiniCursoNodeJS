// Node Modules
const express = require('express');
const consign = require('consign');

const app = express();

// Usando consign para carregar automaticamente os modulos
consign()
  .include('config.js')
  .then('controllers')
  .then('routes')
  .into(app);

// Subindo servidor
app.listen(app.config.application.port, () => {
  console.log("Aplicação rodando na porta " + app.config.application.port);
})