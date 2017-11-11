module.exports = (app) => {
  // Controller para a rota
  const categoryController = app.controllers.category;

  app.get('/category', categoryController.index);
  app.get('/category/form', categoryController.form);
  app.get('/category/form/:id', categoryController.form);

  app.post('/category/add', categoryController.add);
  app.post('/category/edit/:id', categoryController.edit);
  app.post('/category/delete/:id', categoryController.delete);
}