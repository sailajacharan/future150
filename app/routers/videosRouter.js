var express = require('express'),
    router = express.Router();

var VideosRouter = function (videosController) {

  router.get('/videos', videosController.getVideos);

  router.get('/videos/:id([0-9a-f]{24})', videosController.getVideoById);

  router.get('/videos/:legacyId([0-9]+)', videosController.getVideoByLegacyId);

  router.get('/videos/:slug', videosController.getVideoBySlug);

  router.post('/videos', videosController.addVideo);

  router.put('/videos/:id', videosController.updateVideo);

    return router;
};

module.exports = VideosRouter;
