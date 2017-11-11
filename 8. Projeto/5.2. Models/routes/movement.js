module.exports = (app) => {
  // Controller para a rota
  const movementController = app.controllers.movement;

  app.get('/movement', movementController.index);
  app.get('/movement/form', movementController.form);
  app.get('/movement/form/:id', movementController.form);

  app.post('/movement/add', movementController.add);
  app.post('/movement/edit/:id', movementController.edit);
  app.post('/movement/delete/:id', movementController.delete);
}