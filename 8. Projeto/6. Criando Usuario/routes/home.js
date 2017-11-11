module.exports = (app) => {
  const homeController = app.controllers.home;

  app.get('/', homeController.index);
}