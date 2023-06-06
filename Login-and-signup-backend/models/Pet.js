const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  details: String
});

module.exports = mongoose.model("Pet", petSchema);