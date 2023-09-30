const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController'); 
const verify = require('../middlewares/jwt'); 

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Product object that needs to be created
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       201:
 *         description: Successfully created a product
 *         schema:
 *           $ref: '#/definitions/Product'
 *       400:
 *         description: Bad request, validation error, or missing data
 */
router.post('/products', verify, controller.createProduct);

/**
 * @swagger
 * /products/by-category/{category}:
 *   get:
 *     summary: Get products by category
 *     tags:
 *       - Products
 *     parameters:
 *       - name: category
 *         in: path
 *         description: Product category
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Category not found or no products available
 */
router.get('/products/by-category/:category', verify,controller.getProductsByCategory);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Product ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the product
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Product not found
 */
router.get('/products/:id', verify, controller.getProductById);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: No products available
 */
router.get('/products', verify, controller.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Modify (update) a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Product ID
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         description: Updated product data
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully updated the product
 *         schema:
 *           $ref: '#/definitions/Product'
 *       404:
 *         description: Product not found
 *       400:
 *         description: Bad request or validation error
 */
router.put('/products/:id',verify, controller.modifyProductById);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Product ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/products/:id', verify, controller.deleteProductById);

module.exports = router;
