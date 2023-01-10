const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  maxGroupSize: Number,
  difficulty: String,
  ratingsAverage: Number,
  ratingsQuantity: Number,
  price: Number,
  summary: String,
  description: String,
  imageCover: String,
});

const UserModelApiTest = mongoose.model("Users", userSchema);

module.exports = UserModelApiTest;
