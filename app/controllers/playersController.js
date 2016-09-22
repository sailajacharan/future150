var Q = require('q');

var PlayersController = function(playerDataService) {
  return {
    getPlayers: getPlayers,
    getTrendingPlayers: getTrendingPlayers,
    getPlayerById: getPlayerById,
    getPlayerByLegacyId: getPlayerByLegacyId,
    getPlayerBySlug: getPlayerBySlug,
    addPlayer: addPlayer,
    updatePlayer: updatePlayer
  };

  function getPlayers(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(playerDataService.getAll(filter, page, pageSize));
    promises.push(playerDataService.getCount(filter));
    return Q.spread(promises, function(players, count) {
      res.json({
        players: players,
        count: count
      });
    });
  }

  function getTrendingPlayers(req, res) {
    return playerDataService.getAll().then(function(players) {
      res.json(players)
    });
  }

  function getPlayerById(req, res) {
    return playerDataService.getById(req.params.id).then(function(player) {
      res.json(player);
    });
  }

  function getPlayerByLegacyId(req, res) {
    return playerDataService.getByLegacyId(req.params.legacyId).then(function(player) {
      res.json(player);
    });
  }

  function getPlayerBySlug(req, res) {
    return playerDataService.getBySlug(req.params.slug).then(function(player) {
      res.json(player);
    });
  }

  function addPlayer(req, res) {
    return playerDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updatePlayer(req, res) {
    return playerDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = PlayersController;
