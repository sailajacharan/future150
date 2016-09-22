var express = require('express'),
    router = express.Router();

var PlayersRouter = function (playersController) {

    router.get('/players', playersController.getPlayers);

    router.get('/players/trending', playersController.getTrendingPlayers);

    router.get('/players/:id([0-9a-f]{24})', playersController.getPlayerById);

    router.get('/players/:legacyId([0-9]+)', playersController.getPlayerByLegacyId);

    router.get('/players/:slug', playersController.getPlayerBySlug);

    router.post('/players', playersController.addPlayer);

    router.put('/players/:id', playersController.updatePlayer);

    return router;
};

module.exports = PlayersRouter;
