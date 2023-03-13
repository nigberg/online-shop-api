const Product = require('../models/product');
const Cart = require('../models/cart');
const { OK_CREATED_CODE } = require('../utils/constants');
const NotFoundError = require('../utils/errors/NotFoundError');
const ForbiddenError = require('../utils/errors/ForbiddenError');
const BadRequestError = require('../utils/errors/BadRequestError');

const getShoppingCart = (req, res, next) => {
  const userId = req.user._id;

}

const putItemToCart = (req, res, next) => {
  const userId = req.user._id;

}

const removeItemFromCart = (req, res, next) => {
  const userId = req.user._id;

}

module.exports = { getShoppingCart, putItemToCart, removeItemFromCart };