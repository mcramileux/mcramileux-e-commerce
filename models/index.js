// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// followed the mini-project's solved folder
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Product.belongsTo(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'category_id',
  unique: false
});

// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Product, {
  foreignKey: 'category_id',
  unique: false
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
