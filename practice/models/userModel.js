const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Image: String
});

const User = mongoose.model("user", userSchema, "users");

module.exports = User;