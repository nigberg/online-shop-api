const router = require('express').Router();
const {addProductValidator, removeProductValidator} = require('../utils/celebrateValidators');
const { getAllProducts, getProductsByCategory, addProduct, removeProduct } = require('../controllers/products');

router.get('/products', getAllProducts);
router.get('/products/categories/:category', getProductsByCategory);
router.post('/products', addProductValidator, addProduct);
router.delete('/products/:productId', removeProductValidator, removeProduct);


module.exports = router;