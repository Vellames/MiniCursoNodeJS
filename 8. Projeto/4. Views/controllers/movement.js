module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('movement/index');
    },

    form: (req, res) => {
      res.render('movement/form');
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