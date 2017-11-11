const bcrypt = require('bcrypt');

module.exports = (app) => {
  const controller = {
    /**
     * Renderiza formulário
     */
    form: (req, res) => {
      res.render('user/form', app.utils.route_view.getObjectToView(req));
    },

    /**
     * Adiciona um novo usuário na base de dados
     */
    add: (req, res) => {
      // Recuperando model de usuário
      const User = app.db.models.User;

      // Encriptando a senha do usuário
      bcrypt.hash(req.body.user.password, app.config.bcrypt.salts).then((encPassword) => {
        // Adicionando a senha ao body
        req.body.user.password = encPassword;

        // Salvando Usuário
        User.create(req.body.user).then((user) => {
          req.flash('success', 'Usuário cadastrado com sucesso');
          res.redirect('/');
        }).catch((err) => {
          // Verifica as mensagens de erro pra enviar pro flash
          var errorMessage = "";
          err.errors.forEach((error) => {
            errorMessage += error.message
          });
          
          req.flash('error', errorMessage);
          res.redirect('/user/form');
        });
      }).catch((err) => {
        req.flash('error', 'Erro ao encriptar senha');
        res.redirect('/user/form');
      })
    }
  }

  return controller;
}