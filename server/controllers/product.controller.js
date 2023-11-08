import Product from '../models/product.model.js';

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
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
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
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
      return res.status(404).send({ message: 'Product not found' });
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
  deleteProduct
};
