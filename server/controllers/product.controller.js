/* 
Crystal Burnett – 301326769
Alice Huynh – 301341638
Fatima Tuz Zahra – 301347439
Vinh Tran – 301324533
Timothy Li – 301201910
Code Confectioners E-Commerce Website for Bakery
*/

import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Successfully create product!",
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
