var Video = require('../models/video');

var VideoDataService = function() {
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
    return Video.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Video.count(filter)
      .exec();
  }

  function getById(id) {
    return Video.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Video.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Video.findOne({ slug: slug })
      .exec();
  }

  function add(videoToAdd) {
    var video = new Video(videoToAdd);

    return video.save();
  }

  function update(id, video) {
    return Video.findByIdAndUpdate(id, video)
      .exec();
  }
};

module.exports = VideoDataService;
