const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrls: [
    {
      type: String,
    },
  ],
  type: {
    type: String,
    required: true,
  },
  crop: {
    type: String,
    enum: [
      'Apple',
      'Banana',
      'Beans',
      'Black-Green-Gram',
      'Brinjal',
      'Cabbage',
      'Capsicum-Chilli',
      'Chickpeas-Gram',
      'Citrus',
      'Cotton',
      'Cucumber',
      'Ginger',
      'Grapes',
      'Corn',
      'Mango',
      'Watermelon',
      'Millet',
      'Okra',
      'Onion',
      'Papaya',
      'Peanuts',
      'Peas',
      'Pomegranate',
      'Potato',
      'Rice',
      'Sorghum',
      'Soybean',
      'Sugarcane',
      'Tomato',
      'Turmeric',
      'Wheat',
    ],
    required: true,
  },
  stage: {
    type: String,
    enum: ['Seeding', 'Vegetative', 'Flowering', 'Fruiting', 'Harvesting'],
    required: true,
  },
  symptoms: String,
  more_information: String,
  preventive_measures: String,
  recommendations: String,
  organic_control: String,
  causes: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;
