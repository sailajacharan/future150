var Q = require('q');

var ContactsController = function(contactDataService) {
  return {
    getContacts: getContacts,
    getContactById: getContactById,
    getContactByLegacyId: getContactByLegacyId,
    getContactBySlug: getContactBySlug,
    addContact: addContact,
    updateContact: updateContact
  };

  function getContacts(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(contactDataService.getAll(filter, page, pageSize));
    promises.push(contactDataService.getCount(filter));
    return Q.spread(promises, function(contacts, count) {
      res.json({
        contacts: contacts,
        count: count
      });
    });
  }

  function getContactById(req, res) {
    return contactDataService.getById(req.params.id).then(function(contact) {
      res.json(contact);
    });
  }

  function getContactByLegacyId(req, res) {
    return contactDataService.getByLegacyId(req.params.legacyId).then(function(contact) {
      res.json(contact);
    });
  }

  function getContactBySlug(req, res) {
    return contactDataService.getBySlug(req.params.slug).then(function(contact) {
      res.json(contact);
    });
  }

  function addContact(req, res) {
    return contactDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateContact(req, res) {
    return contactDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = ContactsController;
