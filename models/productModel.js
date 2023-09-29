const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Fertilizers', 'Crop Protection', 'Seeds', 'Agrishop Equipments', 'Fish Farming', 'Agri Mandi'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
