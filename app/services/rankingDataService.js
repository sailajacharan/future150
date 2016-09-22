var Ranking = require('../models/ranking');

var RankingDataService = function() {
  return {
    getAll: getAll,
    getCount: getCount,
    getById: getById,
    getByLegacyId: getByLegacyId,
    getBySlug: getBySlug,
    add: add,
    update: update,
    getAllByType: getAllByType,
    getCountByType: getCountByType,
    getByTypeAndYear: getByTypeAndYear
  };

  function getAll(filter, page, pageSize) {
    return Ranking.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Ranking.count(filter)
      .exec();
  }

  function getById(id) {
    return Ranking.findById(id)
      .populate('players.player')
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Ranking.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Ranking.findOne({ slug: slug })
      .exec();
  }

  function add(rankingToAdd) {
    var ranking = new Ranking(rankingToAdd);

    return ranking.save();
  }

  function update(id, ranking) {
    return Ranking.findByIdAndUpdate(id, ranking)
      .exec();
  }

  function getAllByType(type) {
    return Ranking.find({ type: type })
      .sort('year')
      .exec();
  }

  function getCountByType(type) {
    return Ranking.count()
      .exec();
  }

  function getByTypeAndYear(type, year) {
    return Ranking.findOne({ type: type, year: year })
      .exec();
  }
};

module.exports = RankingDataService;
