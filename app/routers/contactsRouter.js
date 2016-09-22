var express = require('express'),
    router = express.Router();

var ContactsRouter = function (contactsController) {

    router.get('/contacts', contactsController.getContacts);

    router.get('/contacts/:id([0-9a-f]{24})', contactsController.getContactById);

    router.get('/contacts/:legacyId([0-9]+)', contactsController.getContactByLegacyId);

    router.get('/contacts/:slug', contactsController.getContactBySlug);

    router.post('/contacts', contactsController.addContact);

    router.put('/contacts/:id', contactsController.updateContact);

    return router;
};

module.exports = ContactsRouter;
