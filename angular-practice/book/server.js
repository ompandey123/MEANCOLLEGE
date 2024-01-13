const express = require("express");
const app = express();
const cors = require("cors");

require("./config/dbconfig.js")();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const BookRoutes = require("./routes/bookRoutes.js");
app.use("/book", BookRoutes);

app.listen(8000, ()=>{
    console.log("App running at 8000");
})