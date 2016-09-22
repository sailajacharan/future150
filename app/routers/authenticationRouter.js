var express = require('express'),
    router = express.Router(),
    authenticate = require('../middleware/authenticate');

var AuthenticationRouter = function(authenticationController) {

  router.post('/token', authenticationController.getToken);

  router.post('/register', authenticationController.register);

  router.get('/profile', authenticate(), authenticationController.getProfile);

  return router;
};

module.exports = AuthenticationRouter;
