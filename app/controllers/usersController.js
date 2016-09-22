var Q = require('q');

var UserController = function(userDataService) {
  return {
    getUsers: getUsers,
    getUserById: getUserById,
    getUserByLegacyId: getUserByLegacyId,
    getUserBySlug: getUserBySlug,
    addUser: addUser,
    updateUser: updateUser
  };

  function getUsers(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(userDataService.getAll(filter, page, pageSize));
    promises.push(userDataService.getCount(filter));
    return Q.spread(promises, function(users, count) {
      res.json({
        users: users,
        count: count
      });
    });
  }

  function getUserById(req, res) {
    return userDataService.getById(req.params.id).then(function(user) {
      res.json(user);
    });
  }

  function getUserByLegacyId(req, res) {
    return userDataService.getByLegacyId(req.params.legacyId).then(function(user) {
      res.json(user);
    });
  }

  function getUserBySlug(req, res) {
    return userDataService.getBySlug(req.params.slug).then(function(user) {
      res.json(user);
    });
  }

  function addUser(req, res) {
    return userDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateUser(req, res) {
    return userDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = UserController;
