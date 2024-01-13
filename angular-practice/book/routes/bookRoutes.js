const Book = require("../models/bookModel.js");
const  route = require("express").Router();

route.get("/home", (req, res)=>{
   Book.find({})
    .then((books)=>{
        res.status(200).send(books);
    })
    .catch((err)=>{
        res.status(400).send("No book available" + err);
    })
});

route.post("/add", (req, res)=>{
    const newBook = new Book({
        bookname: req.body.bookname,
        booktype: req.body.booktype,
        author: req.body.author,
        cost: req.body.cost
    });
    newBook.save()
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})

module.exports = route;