/* 
Crystal Burnett – 301326769
Alice Huynh – 301341638
Fatima Tuz Zahra – 301347439
Vinh Tran – 301324533
Timothy Li – 301201910
Code Confectioners E-Commerce Website for Bakery
*/

import express from "express";
import productController from "../controllers/product.controller.js";
import authController from "../controllers/auth.controller.js";
const router = express.Router();

//Allow only authenticated users to access the following routes
router.use("/api/products", authController.hasAuthorization);

// Create a new product
router.post("/api/products", productController.createProduct);

// Retrieve all products
router.get("/api/products", productController.getProducts);

// Retrieve a single product with productId
router.get("/api/products/:id", productController.getProduct);

// Update a product with productId
router.put("/api/products/:id", productController.updateProduct);

// Delete a product with productId
router.delete("/api/products/:id", productController.deleteProduct);

export default router;
