const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: String,
  email:String,
  contact: Number,
  address: String,
  password: String,
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;