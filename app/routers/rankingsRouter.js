var express = require('express'),
    router = express.Router();

var RankingsRouter = function (rankingsController) {

  router.get('/rankings', rankingsController.getRankings);

  router.get('/rankings/:id([0-9a-f]{24})', rankingsController.getRankingById);

  router.get('/rankings/:legacyId([0-9]+)', rankingsController.getRankingByLegacyId);

  router.get('/rankings/:type', rankingsController.getRankingsByType);

  router.get('/rankings/:type/:year', rankingsController.getRankingsByTypeAndYear);

  router.post('/rankings', rankingsController.addRanking);

  router.put('/rankings/:id([0-9a-f]{24})', rankingsController.updateRanking);

    return router;
};

module.exports = RankingsRouter;
