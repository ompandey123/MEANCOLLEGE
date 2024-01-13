const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

require("./config/dbConfig.js")();

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static("uploads"));
app.use(cors())
app.set("view engine", "ejs");

const routesEmp = require("./routes/employeeRoutes.js");
app.use("/", routesEmp);

app.listen(8000, ()=>{
    console.log("App running at 8000");
})