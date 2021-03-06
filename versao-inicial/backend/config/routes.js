module.exports = app => {
  app.route('/users')
    .post(app.api.user.save)
    .get(app.api.user.get)

  app.route('/users/:id')
    .put(app.api.user.save)
    .get(app.api.user.getById)
    .delete(app.api.user.remove)

  app.route('/categories')
    .get(app.api.category.get)
    .post(app.api.category.save)

  app.route('/categories/:id')
    .put(app.api.category.save)
    .get(app.api.category.getById)
    .delete(app.api.category.remove)
}