// Node Modules
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressFlash = require('express-flash');
const expressSession = require('express-session');
const passport = require('passport');

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

// Usando body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Usando sessões
app.use(expressSession({ 
  secret: config.session.secret,
  maxAge: config.session.maxAge 
}));

// Flash
app.use(expressFlash());

// Inicializando passport
app.use(passport.initialize());
app.use(passport.session());

// Usando consign para carregar automaticamente os modulos
consign()
  .include('config.js')
  .then('db.js')
  .then('utils')
  .then('middlewares')
  .then('controllers')
  .then('routes')
  .into(app);

// Inicializando passport
const passportLoad = require('./passport')(app, passport);

// Sincronizando sequelize
app.db.sequelize.sync({ force: app.config.application.sequelizeForce }).done(() => {
  // Subindo servidor
  app.listen(app.config.application.port, () => {
    console.log("Aplicação rodando na porta " + app.config.application.port);
  });
});
