const Employee = require("../models/employeeModel.js");
const Qualification = require("../models/qualificationModel.js");
const Admin = require("../models/adminModel.js");
const route = require("express").Router();
const multer = require("multer");
const e = require("express");

const storage = multer.diskStorage({
    destination:function(req, file, cb)
    {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb)
    {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single('image');

route.get("/add", async (req, res)=>{
    const qual = await Qualification.find({});
    res.render("add", {
        qual
    });
});

route.post("/add", upload, async (req, res)=>{
    const newEmp = new Employee({
        username: req.body.username,
        password: req.body.password,
        qualification: req.body.qualification,
        image: req.file.filename
    });
    newEmp.save();
    res.redirect("/home");
});

route.get("/home", async(req, res)=>{
    Employee.find({}).then((data)=>{
        res.render("home", {
            data: data,
            isLoggedIn: req.session.isLoggedIn,
            username: req.session.username
        });
    }).catch((error)=>{
        res.status(400).send("Error", error);
    });
});

route.get("/login", (req, res)=>{
    res.render("login");
})

route.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    const adminData = await Admin.findOne({});
    if(adminData)
    {
        if(username === adminData.username && password === adminData.password)
        {
            req.session.isLoggedIn = true;
            req.session.username = username;
            res.redirect("/home");
        }
        else
        {
            res.redirect("/login");
        }
    }
});

route.get("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        if(err)
        {
            console.err("Error", err);
        }
        else
        {
            res.redirect("/login");
        }
    })
});

route.get("/delete/:id", async(req, res)=>{
    const deletedUser = req.params.id;
    await Employee.findByIdAndDelete(deletedUser);
    res.redirect("/home");
});

route.get("/edit/:id", (req, res)=>{
    const userId = req.params.id;

    Employee.findById(userId)
    .then((emp)=>{
        res.render("edit", {
            emp
        })
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

route.post("/edit/:id", upload, (req, res)=>{
    const empId = req.params.id;

    Employee.findByIdAndUpdate(empId, {
        username: req.body.username,
        password: req.body.password,
        image: req.file.filename
    })
    .then(()=>{
        res.redirect("/home");
    })
    .catch((err)=>{
        console.error("Error updating", err);
        res.redirect("/home")
    })
});

route.get("/display", (req, res)=>{
    Employee.find({})
    .then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

module.exports = route;