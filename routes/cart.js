const router = require('express').Router();
const { getShoppingCart, putItemToCart, removeItemFromCart } = require('../controllers/cart');

router.get('/cart', getShoppingCart);
router.put('/cart/:productId', putItemToCart);
router.delete('/cart/:productId', removeItemFromCart);


module.exports = router;