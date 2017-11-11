// Node Modules
const express = require('express');
const consign = require('consign');

// Native modules
const path = require('path');

// Aplicação
const app = express();

// Definindo view
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.basedir = path.join(__dirname, 'views');

// Usando consign para carregar automaticamente os modulos
consign()
  .include('config.js')
  .then('db.js')
  .then('controllers')
  .then('routes')
  .into(app);

// Sincronizando sequelize
app.db.sequelize.sync({ force: app.config.application.sequelizeForce }).done(() => {
  // Subindo servidor
  app.listen(app.config.application.port, () => {
    console.log("Aplicação rodando na porta " + app.config.application.port);
  });
});
