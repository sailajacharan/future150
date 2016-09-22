var express = require('express'),
    router = express.Router();

var MessageBoardsRouter = function (messageBoardsController) {

    router.get('/messageBoardThreads', messageBoardsController.getMessageBoardThreads);

    router.get('/messageBoardThreads/:id([0-9a-f]{24})', messageBoardsController.getMessageBoardThreadById);

    router.get('/messageBoardThreads/:legacyId([0-9]+)', messageBoardsController.getMessageBoardThreadByLegacyId);

    router.get('/messageBoardThreads/:slug', messageBoardsController.getMessageBoardThreadBySlug);

    router.post('/messageBoardThreads', messageBoardsController.addMessageBoardThread);

    router.put('/messageBoardThreads/:id', messageBoardsController.updateMessageBoardThread);

    return router;
};

module.exports = MessageBoardsRouter;
