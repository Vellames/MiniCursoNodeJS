module.exports = (app) => {
  const controller = {
    index: (req, res) => {
      res.render('index', app.utils.route_view.getObjectToView(req));
    }
  };

  return controller;
}