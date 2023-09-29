const express = require('express');
const router = express.Router();
const controller = require("../controllers/productController");
const verify = require("../middlewares/jwt");

router.post('/products',verify, controller.createProduct);

router.get('/products/by-category/:category', controller.getProductsByCategory);

router.get('/products/:id',verify, controller.getProductById);

router.get('/products',verify, controller.getAllProducts);

router.put('/products/:id', controller.modifyProductById);

router.delete('/products/:id',verify, controller.deleteProductById);

module.exports = router;
