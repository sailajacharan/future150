var Q = require('q');

var VideosController = function(videoDataService) {
  return {
    getVideos: getVideos,
    getVideoById: getVideoById,
    getVideoByLegacyId: getVideoByLegacyId,
    getVideoBySlug: getVideoBySlug,
    addVideo: addVideo,
    updateVideo: updateVideo
  };

  function getVideos(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(videoDataService.getAll(filter, page, pageSize));
    promises.push(videoDataService.getCount(filter));
    return Q.spread(promises, function(videos, count) {
      res.json({
        videos: videos,
        count: count
      });
    });
  }

  function getVideoById(req, res) {
    return videoDataService.getById(req.params.id).then(function(video) {
      res.json(video);
    });
  }

  function getVideoByLegacyId(req, res) {
    return videoDataService.getByLegacyId(req.params.legacyId).then(function(video) {
      res.json(video);
    });
  }

  function getVideoBySlug(req, res) {
    return videoDataService.getBySlug(req.params.slug).then(function(video) {
      res.json(video);
    });
  }

  function addVideo(req, res) {
    return videoDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateVideo(req, res) {
    return videoDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = VideosController;
