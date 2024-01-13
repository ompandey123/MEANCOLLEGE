const express = require("express");
const app = express();
const cors = require("cors")

require("./config/dbConfig.js")();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.set("view engine", "ejs");

const userRoutes = require("./routes/routes.js");
app.use("/", userRoutes);

app.listen(8000, ()=>{
    console.log("Running at 8000");
})