var Product = require('../models/product');

var ProductDataService = function() {
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
    return Product.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Product.count(filter)
      .exec();
  }

  function getById(id) {
    return Product.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Product.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Product.findOne({ slug: slug })
      .exec();
  }

  function add(productToAdd) {
    var product = new Product(productToAdd);

    return product.save();
  }

  function update(id, product) {
    return Product.findByIdAndUpdate(id, product)
      .exec();
  }
};

module.exports = ProductDataService;
