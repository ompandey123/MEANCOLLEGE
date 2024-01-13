require("dotenv").config();
const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect(process.env.URL);
    mongoose.connection.on("connected", ()=>{
        console.log("Connected to DB");
    });

    const db = mongoose.connection;
    db.on("error", ()=>{
        console.error.bind(console, "Error occured in connection");
    });
}