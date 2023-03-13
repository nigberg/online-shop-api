const mongoose = require('mongoose');
const valid = require('validator');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return valid.isURL(v);
      },
      message: 'Incorrect image URL',
    },
  },
  brand: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('product', productSchema);
