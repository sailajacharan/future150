var Player = require('../models/player');

var PlayerDataService = function() {
  return {
    getAll: getAll,
    getCount: getCount,
    getById: getById,
    getByLegacyId: getByLegacyId,
    getBySlug: getBySlug,
    add: add,
    update: update
  };

  function getAll(filter, page, pageSize) {
    filter = filter || {};
    page = page || 1;
    pageSize = pageSize || 5;
    return Player.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Player.count(filter)
      .exec();
  }

  function getById(id) {
    return Player.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Player.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Player.findOne({ slug: slug })
      .exec();
  }

  function add(playerToAdd) {
    var player = new Player(playerToAdd);

    return player.save();
  }

  function update(id, player) {
    return Player.findByIdAndUpdate(id, player)
      .exec();
  }
};

module.exports = PlayerDataService;
