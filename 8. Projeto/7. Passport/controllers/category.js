module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('category/index', app.utils.route_view.getObjectToView(req));
    },

    form: (req, res) => {
      res.render('category/form', app.utils.route_view.getObjectToView(req));
    },

    add: (req, res) => {

    },

    edit: (req, res) => {

    },

    delete: (req, res) => {
      
    }
  }
  
  return controller
};