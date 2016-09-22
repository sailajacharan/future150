var express = require('express'),
    router = express.Router();

var ProductsRouter = function (productsController) {

    router.get('/products', productsController.getProducts);

    router.get('/products/:id([0-9a-f]{24})', productsController.getProductById);

    router.get('/products/:legacyId([0-9]+)', productsController.getProductByLegacyId);

    router.get('/products/:slug', productsController.getProductBySlug);

    router.post('/products', productsController.addProduct);

    router.put('/products/:id', productsController.updateProduct);

    return router;
};

module.exports = ProductsRouter;
