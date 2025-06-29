const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
