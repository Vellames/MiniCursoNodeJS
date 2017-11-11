module.exports = (app) => {
  const userController = app.controllers.user;

  app.get('/user/form', userController.form);
  app.post('/user/add', userController.add);
}