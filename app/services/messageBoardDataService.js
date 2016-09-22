var MessageBoardThread = require('../models/messageBoardThread');

var MessageBoardDataService = function() {
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
    return MessageBoardThread.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return MessageBoardThread.count(filter)
      .exec();
  }

  function getById(id) {
    return MessageBoardThread.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return MessageBoardThread.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return MessageBoardThread.findOne({ slug: slug })
      .exec();
  }

  function add(messageBoardThreadToAdd) {
    var messageBoardThread = new MessageBoardThread(messageBoardThreadToAdd);

    return messageBoardThread.save();
  }

  function update(id, messageBoardThread) {
    return MessageBoardThread.findByIdAndUpdate(id, messageBoardThread)
      .exec();
  }
};

module.exports = MessageBoardDataService;
