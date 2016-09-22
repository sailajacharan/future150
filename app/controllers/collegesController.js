var Q = require('q');

var CollegesController = function(collegeDataService) {
  return {
    getColleges: getColleges,
    getCollegeById: getCollegeById,
    getCollegeByLegacyId: getCollegeByLegacyId,
    getCollegeBySlug: getCollegeBySlug,
    addCollege: addCollege,
    updateCollege: updateCollege
  };

  function getColleges(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(collegeDataService.getAll(filter, page, pageSize));
    promises.push(collegeDataService.getCount(filter));
    return Q.spread(promises, function(colleges, count) {
      res.json({
        colleges: colleges,
        count: count
      });
    });
  }

  function getCollegeById(req, res) {
    return collegeDataService.getById(req.params.id).then(function(college) {
      res.json(college);
    });
  }

  function getCollegeByLegacyId(req, res) {
    return collegeDataService.getByLegacyId(req.params.legacyId).then(function(college) {
      res.json(college);
    });
  }

  function getCollegeBySlug(req, res) {
    return collegeDataService.getBySlug(req.params.slug).then(function(college) {
      res.json(college);
    });
  }

  function addCollege(req, res) {
    return collegeDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateCollege(req, res) {
    return collegeDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = CollegesController;
