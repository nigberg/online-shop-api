const Product = require('../models/product');
const { OK_CREATED_CODE } = require('../utils/constants');
const NotFoundError = require('../utils/errors/NotFoundError');
const ForbiddenError = require('../utils/errors/ForbiddenError');
const BadRequestError = require('../utils/errors/BadRequestError');

const getAllProducts = (req, res, next) => {
  Product.find({})
    .then((products) => {
      res.send({ data: products });
    })
    .catch(next);
};

const getProductsByCategory = (req, res, next) => {
  const { category } = req.params;
  Product.find({category})
  .then((products) => {
    res.send({ data: products });
  })
  .catch(next);
};

const addProduct = (req, res, next) => {
  const {title, description, price, image, brand, category} = req.body;
  Product.create({title, description, price, image, brand, category})
  .then((product) => {
    res.status(OK_CREATED_CODE).send({ data: product });
  })
  .catch((err) => {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Invalid data'));
    } else {
      next(err);
    }
  });
};

const removeProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.findById(productId)
    .orFail(() => {
      const err = new NotFoundError('Product not found');
      throw err;
    })
    .then((product) => {
      return Product.findByIdAndDelete(productId);
    })
    .then((removedProduct) => {
      res.send({ data: removedProduct });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Invalid ID'));
      } else {
        next(err);
      }
    });
};

module.exports = { getAllProducts, getProductsByCategory, addProduct, removeProduct };
