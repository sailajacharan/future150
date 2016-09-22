var express = require('express'),
    router = express.Router();

var CollegesRouter = function (collegesController) {

    router.get('/colleges', collegesController.getColleges);

    router.get('/colleges/:id([0-9a-f]{24})', collegesController.getCollegeById);

    router.get('/colleges/:legacyId([0-9]+)', collegesController.getCollegeByLegacyId);

    router.get('/colleges/:slug', collegesController.getCollegeBySlug);

    router.post('/colleges', collegesController.addCollege);

    router.put('/colleges/:id', collegesController.updateCollege);

    return router;
};

module.exports = CollegesRouter;
