module.exports = (app) => {
  // Controller para a rota
  const movementController = app.controllers.movement;

  app.get('/movement', app.middlewares.security.isAuthorized, movementController.index);
  app.get('/movement/form', app.middlewares.security.isAuthorized, movementController.form);
  app.get('/movement/form/:id', app.middlewares.security.isAuthorized, movementController.form);

  app.post('/movement/add', app.middlewares.security.isAuthorized, movementController.add);
  app.post('/movement/edit/:id', app.middlewares.security.isAuthorized, movementController.edit);
  app.get('/movement/delete/:id', app.middlewares.security.isAuthorized, movementController.delete);
}