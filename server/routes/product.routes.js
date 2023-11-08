import express from 'express';
import productController from '../controllers/product.controller.js';
const router = express.Router();

// Create a new product
router.post('/products', productController.createProduct);

// Retrieve all products
router.get('/products', productController.getProducts);

// Retrieve a single product with productId
router.get('/products/:id', productController.getProduct);

// Update a product with productId
router.put('/products/:id', productController.updateProduct);

// Delete a product with productId
router.delete('/products/:id', productController.deleteProduct);

export default router;
