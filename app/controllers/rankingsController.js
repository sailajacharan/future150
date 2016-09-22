var Q = require('q');

var RankingsController = function(rankingDataService) {
  return {
    getRankings: getRankings,
    getRankingById: getRankingById,
    getRankingByLegacyId: getRankingByLegacyId,
    addRanking: addRanking,
    updateRanking: updateRanking,
    getRankingsByType: getRankingsByType,
    getRankingsByTypeAndYear: getRankingsByTypeAndYear
  };

  function getRankings(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(rankingDataService.getAll(filter, page, pageSize));
    promises.push(rankingDataService.getCount(filter));
    return Q.spread(promises, function(rankings, count) {
      res.json({
        rankings: rankings,
        count: count
      });
    });
  }

  function getRankingById(req, res) {
    return rankingDataService.getById(req.params.id).then(function(ranking) {
      res.json(ranking);
    });
  }

  function getRankingByLegacyId(req, res) {
    return rankingDataService.getByLegacyId(req.params.legacyId).then(function(ranking) {
      res.json(ranking);
    });
  }

  function addRanking(req, res) {
    return rankingDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateRanking(req, res) {
    return rankingDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }

  function getRankingsByType(req, res) {
    var promises = [];
    promises.push(rankingDataService.getAllByType(req.params.type));
    promises.push(rankingDataService.getCountByType(req.params.type));
    return Q.spread(promises, function(rankings, count) {
      res.json({
        rankings: rankings,
        count: count
      });
    });
  }

  function getRankingsByTypeAndYear(req, res) {
    return rankingDataService.getByTypeAndYear(req.params.type).then(function(ranking) {
      res.json(ranking);
    });
  }
}

module.exports = RankingsController;
