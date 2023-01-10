const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogdb", () => {
  console.log("db connected successfully");
});
