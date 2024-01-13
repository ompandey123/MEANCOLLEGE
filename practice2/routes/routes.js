const User = require("../models/userModel.js");
const Admin = require("../models/userModel.js");
const route = require("express").Router();
const multer = require("multer");

//multer code
const storage = multer.diskStorage({
    destination: function(req, file, cb)
    {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb)
    {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

const upload = multer ({
    storage: storage  
}).single('image');


route.get("/add", (req, res)=>{
    res.render("add");
});

route.post("/add",upload, (req, res)=>{
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        image: req.file.filename
    });
    newUser.save();
    res.redirect("/");
});

route.get("/", (req,res)=>{
    User.find({})
    .then((data)=>{
        res.render("dashboard", {
            data: data
        })
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

route.get("/delete/:id", async (req, res)=>{
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.redirect("/");
});

route.get("/display", (req, res)=>{
    User.find({})
    .then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

module.exports = route;