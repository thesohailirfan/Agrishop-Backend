const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: String,
  thumbnail: String,
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
});

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
