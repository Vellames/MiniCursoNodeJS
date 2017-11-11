module.exports = (app) => {

  const Category = app.db.models.Category;
  const Movement = app.db.models.Movement;

  const controller = {
    /**
     * Lista as movimentações do usuário
     */
    index: (req, res) => {
      const params = {
        order: ['date'],
        where : { 
          user_id: req.session.passport.user.id
        },
        include: [
          {model: Category}
        ] 
      };

      Movement.findAll(params).then((movements) => {
          res.render('movement/index', app.utils.route_view.getObjectToView(req, { movements }));
      });
    },

    /**
     * Carrega o formulário das movimentações
     */
    form: (req, res) => {
      var params = {};
      Category.findAll({order: ['name'], where : { user_id: req.session.passport.user.id} }).then((categories) => {
        params['categories'] = categories;
        
        if(req.params.id) {
          Movement.findOne({ where: { user_id: req.session.passport.user.id, id: req.params.id } }).then((movement) => {
            if(movement) {
              params['movement'] = movement;
              params['mode'] = 'edit';
              res.render('movement/form', app.utils.route_view.getObjectToView(req, params));
            } else {
              res.redirect('/');
            }
          });
        } else {
          params['mode'] = 'add'
          res.render('movement/form', app.utils.route_view.getObjectToView(req, params));
        }
      })
    },

    /**
     * Adiciona uma movimentação
     */
    add: (req, res) => {
      // Revertendo o objeto da data para
      req.body.movement.date = req.body.movement.date.split('/').reverse().join('-');

      // Removendo mascara de dinheiro
      const value = req.body.movement.value;
      req.body.movement.value = value.split('.').join('').replace(',','.');

      // Adicionando usuário
      req.body.movement.user_id = req.session.passport.user.id;

      // Criando usuário
      Movement.create(req.body.movement).then((movement) => {
        req.flash('success', 'Movimentação salva com sucesso');
        res.redirect('/movement');
      }).catch((err) => {
        console.log(err);
        req.flash('error', 'Erro ao salvar movimentação, por favor contacte o administrador do sistema ');
        res.redirect('/movement/form');
      })
    },

    /**
     * Edita uma movimentação
     */
    edit: (req, res) => {
      // Revertendo o objeto da data para
      req.body.movement.date = req.body.movement.date.split('/').reverse().join('-');
      
      // Removendo mascara de dinheiro
      const value = req.body.movement.value;
      req.body.movement.value = value.split('.').join('').replace(',','.');

      Movement.update(req.body.movement, { where: {
        id: req.params.id,
        user_id: req.session.passport.user.id
      }}).then((rows) => {
        req.flash('success', 'Movimentação editada com sucesso');
        res.redirect('/movement');
      }).catch((err) => {
        req.flash('error', 'Erro ao editar movimentação, por favor contacte o administrador do sistema');
        res.redirect('/movement/form');
      })
    },

    /**
     * Apaga uma movimentação
     */
    delete: (req, res) => {
      Movement.destroy({ where: {
        id: req.params.id,
        user_id: req.session.passport.user.id
      }}).then((rows) => {
        if(rows === 1){
          req.flash('success', 'Movimentação apagada com sucesso');
        } else {
          req.flash('info', 'Você não pode excluir movimentações que não são suas');
        }
        
        res.redirect('/movement');
      }).catch((err) => {
        req.flash('error', 'Erro ao apagar movimentação');
        res.redirect('/movement/form');
      })
    }
  }
  
  return controller;
};