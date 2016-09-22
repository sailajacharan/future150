var Q = require('q');

var ProductsController = function(productDataService) {
  return {
    getProducts: getProducts,
    getProductById: getProductById,
    getProductByLegacyId: getProductByLegacyId,
    getProductBySlug: getProductBySlug,
    addProduct: addProduct,
    updateProduct: updateProduct
  };

  function getProducts(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(productDataService.getAll(filter, page, pageSize));
    promises.push(productDataService.getCount(filter));
    return Q.spread(promises, function(products, count) {
      res.json({
        products: products,
        count: count
      });
    });
  }

  function getProductById(req, res) {
    return productDataService.getById(req.params.id).then(function(product) {
      res.json(product);
    });
  }

  function getProductByLegacyId(req, res) {
    return productDataService.getByLegacyId(req.params.legacyId).then(function(product) {
      res.json(product);
    });
  }

  function getProductBySlug(req, res) {
    return productDataService.getBySlug(req.params.slug).then(function(product) {
      res.json(product);
    });
  }

  function addProduct(req, res) {
    return productDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateProduct(req, res) {
    return productDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
}

module.exports = ProductsController;
