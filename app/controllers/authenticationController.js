var jwt = require('jsonwebtoken');

var AuthenticationController = function(userDataService) {
  return {
    getToken: getToken,
    register: register,
    getProfile: getProfile
  };

  function getToken(req, res) {
    return userDataService.getByUserName(req.body.username).then(function(user) {
      if (!user) {
        res.status(401).send('Unauthorized');
      }
      else {
        res.json({
          token: jwt.sign(user.toObject(), authenticationConfig.secret)
        });
      }
    });
  }

  function register(req, res) {
    return userDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function getProfile(req, res) {
    return userDataService.getById(req.user._id).then(function(user) {
      res.json({
        user: user
      });
    });
  }
}

module.exports = AuthenticationController;
