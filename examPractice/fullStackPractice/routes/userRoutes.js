const User = require("../models/userModel.js");
const multer = require("multer");
const route = require("express").Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, './uploads');
    },
    filename: function(req, file, cb)
    {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single('image');

route.get("/", (req, res)=>{
    User.find({}).then(
        (users) => {
            res.render("dashboard", {
                users: users
            });
        }
    ).catch((err)=>{
        if(err){
            res.status(400).send(err);
        }
    })
});

route.get("/add", (req, res)=>{
    res.render("add");
});

route.post("/add", upload, (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        image: req.file.filename
    });
    newUser.save();
    res.redirect("/");
})

module.exports = route;