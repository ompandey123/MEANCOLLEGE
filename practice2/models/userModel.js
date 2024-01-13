const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
    email: String,
    address: String,
    password: String,
    image: String
});

const User = mongoose.model("user", userSchema, "users");

module.exports = User;