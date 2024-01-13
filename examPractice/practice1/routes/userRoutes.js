const route = require("express").Router();
const User = require("../model/userModel.js");

route.post("/createUser", async(req, res)=>{
    console.log(req.body);
    const newUser =  await new User({
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
    });
    const data = await newUser.save();
    if(data)
    {
        res.status(200).send(data);
    }
    else
    {
        res.status(400).send("Error in inserting");
    }
    
})

module.exports = route;