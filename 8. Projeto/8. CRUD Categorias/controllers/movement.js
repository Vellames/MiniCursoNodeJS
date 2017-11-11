module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('movement/index', app.utils.route_view.getObjectToView(req));
    },

    form: (req, res) => {
      res.render('movement/form', app.utils.route_view.getObjectToView(req));
    },

    add: (req, res) => {

    },

    edit: (req, res) => {

    },

    delete: (req, res) => {
      
    }
  }
  
  return controller;
};