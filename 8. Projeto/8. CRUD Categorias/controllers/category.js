module.exports = (app) => {

  const Category = app.db.models.Category;

  const controller = {

    /**
     * Carrega a lista de categorias
     */
    index: (req, res) => {
      Category.findAll({order: ['name'], where : { user_id: req.session.passport.user.id} }).then((categories) => {
        res.render('category/index', app.utils.route_view.getObjectToView(req, {categories}));
      })
    },

    /**
     * Carrega o formulário de categorias
     */
    form: (req, res) => {
      // Verifica o modo que o form será carregado
      if(req.params.id) {
        // Carrega os dados da categoria
        Category.findOne({ where: { user_id: req.session.passport.user.id, id: req.params.id } }).then((category) => {
          if(category) {
            res.render('category/form', app.utils.route_view.getObjectToView(req, {mode: 'edit', category}));
          } else {
            res.redirect('/');
          }
        })
      } else {
        res.render('category/form', app.utils.route_view.getObjectToView(req, {mode: 'add'}));
      }
    },

    /**
     * Adiciona uma categoria
     */
    add: (req, res) => {
      // Adiciona o id do usuário ao body
      req.body.category.user_id = req.session.passport.user.id;

      Category.create(req.body.category).then((category) => {
        req.flash('success', 'Categoria salva com sucesso');
        res.redirect('/category');
      }).catch((err) => {
        req.flash('error', 'Erro ao salvar categoria, por favor contacte o administrador do sistema');
        res.redirect('/category/form');
      });
    },

    /**
     * Edita uma categoria
     */
    edit: (req, res) => {
      Category.update({
        name: req.body.category.name
      }, { where : {
        id: req.params.id,
        user_id: req.session.passport.user.id
      }}).then((rows) => {
        req.flash('success', 'Categoria editada com sucesso');
        res.redirect('/category');
      }).catch((err) => {
        req.flash('error', 'Erro ao editar categoria, por favor contacte o administrador do sistema');
        res.redirect('/category/form');
      })
    },

    /**
     * Apaga uma categoria
     */
    delete: (req, res) => {
      Category.destroy({ where: {
        id: req.params.id,
        user_id: req.session.passport.user.id
      }}).then((rows) => {
        if(rows === 1){
          req.flash('success', 'Categoria apagada com sucesso');
        } else {
          req.flash('info', 'Você não pode excluir categorias que não são suas');
        }
        
        res.redirect('/category');
      }).catch((err) => {
        req.flash('error', 'Erro ao apagar categoria, verifique se sua categoria está sendo usada por uma receita ou despesa');
        res.redirect('/category/form');
      })
    }
  }
  
  return controller
};