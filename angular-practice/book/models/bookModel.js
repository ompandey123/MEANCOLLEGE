const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
    bookname:String,
    booktype:String,
    author: String,
    cost: Number
});

const Book = mongoose.model("book", BookSchema, "books");

module.exports = Book;