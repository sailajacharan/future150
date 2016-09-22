var College = require('../models/college');

var CollegeDataService = function() {
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
    return College.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return College.count(filter)
      .exec();
  }

  function getById(id) {
    return College.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return College.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return College.findOne({ slug: slug })
      .exec();
  }

  function add(collegeToAdd) {
    var college = new College(collegeToAdd);

    return college.save();
  }

  function update(id, college) {
    return College.findByIdAndUpdate(id, college)
      .exec();
  }
};

module.exports = CollegeDataService;
