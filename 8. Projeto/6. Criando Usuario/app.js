// Node Modules
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressFlash = require('express-flash');
const expressSession = require('express-session');

// Native modules
const path = require('path');

// Personal modules
const config = require('./config');

// Aplicação
const app = express();

// Definindo view
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.basedir = path.join(__dirname, 'views');

// Usando sessões
app.use(expressSession({ 
  secret: config.session.secret,
  maxAge: config.session.maxAge 
}));

// Usando express flash
app.use(expressFlash());

// Usando body parser
app.use(bodyParser.json()); // Quero que o body seja transformado em json
app.use(bodyParser.urlencoded({extended: true})); // Habilita uso de arrays

// Usando consign para carregar automaticamente os modulos
consign()
  .include('config.js')
  .then('db.js')
  .then('utils')
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
