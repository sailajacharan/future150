var User = require('../models/user');

var UserDataService = function () {
    return {
        getAll: getAll,
        getCount: getCount,
        getById: getById,
        getByLegacyId: getByLegacyId,
        getBySlug: getBySlug,
        add: add,
        update: update,
        getByUsername: getByUsername
    };

    function getAll(filter, page, pageSize) {
        return User.find(filter)
            .sort('-createdDate')
            .skip(page * pageSize)
            .limit(pageSize)
            .exec();
    }

    function getCount(filter) {
        return User.count(filter)
            .exec();
    }

    function getById(id) {
        return User.findById(id)
            .exec();
    }

    function getByLegacyId(legacyId) {
        return User.findOne({ legacyId: legacyId })
            .exec();
    }

    function getBySlug(slug) {
        return User.findOne({ slug: slug })
            .exec();
    }

    function add(userToAdd) {
        var user = new User(userToAdd);

        return user.save();
    }

    function update(id, user) {
        return User.findByIdAndUpdate(id, user)
            .exec();
    }

    function getByUsername(username) {
        return User.findOne({ username: username })
            .exec();
    }
}

module.exports = UserDataService;
