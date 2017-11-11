module.exports = (app) => {
  // Controller para a rota
  const categoryController = app.controllers.category;

  app.get('/category', app.middlewares.security.isAuthorized, categoryController.index);
  app.get('/category/form', app.middlewares.security.isAuthorized, categoryController.form);
  app.get('/category/form/:id', app.middlewares.security.isAuthorized, categoryController.form);

  app.post('/category/add', app.middlewares.security.isAuthorized, categoryController.add);
  app.post('/category/edit/:id', app.middlewares.security.isAuthorized, categoryController.edit);
  app.post('/category/delete/:id', app.middlewares.security.isAuthorized, categoryController.delete);
}