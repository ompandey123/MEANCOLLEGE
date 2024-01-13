const User = require("../models/userModel.js");
const route = require("express").Router();
const multer = require("multer");
//const uploadPath = require("../uploads")
const bcrypt = require("bcrypt");

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

const upload = multer ({
    storage: storage
}).single('image');


route.get("/", (req, res)=>{
    User.find({})
    .then((data)=>{
        res.render("home", {
            data: data,
            isLoggedIn: req.session.isLoggedIn,
            username: req.session.username,
        });
    }).catch((error)=>{
        console.log("Error", error);
    });
});

route.get("/add",  (req, res)=>{
    res.render("add");
})

route.post("/add", upload, async (req, res)=>{
    // const hashpassword = bcrypt.hash(req.body.password, 10);
    const newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        Image: req.file.filename
    });

    await newUser.save();
    res.redirect("/");
});

route.get("/delete/:id", async (req, res)=>{
    const deletedUser = req.params.id;
    await User.findByIdAndDelete(deletedUser);
    res.redirect("/");
});

route.get("/home", (req, res)=>{
    User.find({})
    .then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})


route.get("/login", (req, res)=>{
    res.render("login");
});

route.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    // const user = await User.find({});
    // const user = await User.find({username});
    
    // if(user)
    // {
    //     console.log(user);
    //     if(req.body.password === user.password)
    //     {
    //         req.session.isLoggedIn = true;
    //         req.session.username = username;
    //         res.redirect("/")
    //     }
    //     else
    //     {
    //          res.redirect("/login");
    //     }
    // }
    if(username == "admin" && password == "admin123")
    {
        req.session.isLoggedIn = true;
        req.session.username = username;
        res.redirect("/")
    }
    else
    {
        res.redirect("/login");
    }
});

route.get("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Error in destroying session", err);
        }
        else
        {
            res.redirect("/login");
        }
    })
})
module.exports = route;