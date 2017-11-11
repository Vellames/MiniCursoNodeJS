module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('index');
    }
  };

  return controller;
}