const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    address: String,
    password: String,
    Image: String
});

const user = mongoose.model("User", userSchema, "users");

module.exports = user