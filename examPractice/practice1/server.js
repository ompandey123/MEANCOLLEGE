const express = require("express");
const app = express();

require("./config/dbConfig.js")();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoute = require("./routes/userRoutes.js");
app.use("/", userRoute);

app.listen(8000, ()=>{
    console.log("Running at 8000");
})