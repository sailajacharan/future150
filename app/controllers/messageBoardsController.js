var Q = require('q');

var MessageBoardsController = function(messageBoardDataService) {
  return {
    getMessageBoardThreads: getMessageBoardThreads,
    getMessageBoardThreadById: getMessageBoardThreadById,
    getMessageBoardThreadByLegacyId: getMessageBoardThreadByLegacyId,
    getMessageBoardThreadBySlug: getMessageBoardThreadBySlug,
    addMessageBoardThread: addMessageBoardThread,
    updateMessageBoardThread: updateMessageBoardThread
  };

  function getMessageBoardThreads(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(messageBoardDataService.getAll(filter, page, pageSize));
    promises.push(messageBoardDataService.getCount(filter));
    return Q.spread(promises, function(messageBoardThreads, count) {
      res.json({
        messageBoardThreads: messageBoardThreads,
        count: count
      });
    });
  }

  function getMessageBoardThreadById(req, res) {
    return messageBoardDataService.getById(req.params.id).then(function(messageBoardThread) {
      res.json(messageBoardThread);
    });
  }

  function getMessageBoardThreadByLegacyId(req, res) {
    return messageBoardDataService.getByLegacyId(req.params.legacyId).then(function(messageBoardThread) {
      res.json(messageBoardThread);
    });
  }

  function getMessageBoardThreadBySlug(req, res) {
    return messageBoardDataService.getBySlug(req.params.slug).then(function(messageBoardThread) {
      res.json(messageBoardThread);
    });
  }

  function addMessageBoardThread(req, res) {
    return messageBoardDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateMessageBoardThread(req, res) {
    return messageBoardDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = MessageBoardsController;
