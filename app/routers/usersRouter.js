var express = require('express'),
    router = express.Router();

var UsersRouter = function (usersController) {

  router.get('/users', usersController.getUsers);

  router.get('/users/:id([0-9a-f]{24})', usersController.getUserById);

  router.get('/users/:legacyId([0-9]+)', usersController.getUserByLegacyId);

  router.get('/users/:slug', usersController.getUserBySlug);

  router.post('/users', usersController.addUser);

  router.put('/users/:id', usersController.updateUser);

    return router;
};

module.exports = UsersRouter;
