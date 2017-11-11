module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('category/index');
    },

    form: (req, res) => {
      res.render('category/form');
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