var Contact = require('../models/contact');

var ContactDataService = function() {
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
    return Contact.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Contact.count(filter)
      .exec();
  }

  function getById(id) {
    return Contact.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Contact.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Contact.findOne({ slug: slug })
      .exec();
  }

  function add(contactToAdd) {
    var contact = new Contact(contactToAdd);

    return contact.save();
  }

  function update(id, contact) {
    return Contact.findByIdAndUpdate(id, contact)
      .exec();
  }
};

module.exports = ContactDataService;
