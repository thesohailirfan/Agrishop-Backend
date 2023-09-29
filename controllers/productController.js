const Product = require("../models/productModel"); 

exports.createProduct = async (req, res) => {
  try {
    const { name, imageUrl, price, category } = req.body;
    const product = new Product({ name, imageUrl, price, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    if (!category) {
      return res.status(400).json({ error: 'Category parameter is missing' });
    }
    const products = await Product.find({ category });
    if (products.length === 0) {
      return res.status(404).json({ error: 'No products found for the specified category' });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    if (!productId) {
      return res.status(400).json({ error: 'Product ID parameter is missing' });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.modifyProductById = async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;

  try {
    if (!productId) {
      return res.status(400).json({ error: 'Product ID parameter is missing' });
    }
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, {
      new: true, 
    });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
