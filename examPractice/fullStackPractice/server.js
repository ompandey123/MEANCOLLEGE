const express = require("express");
const app = express();

require("./config/dbConfig.js")();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const userRouter = require("./routes/userRoutes.js");
app.use("/", userRouter);

app.listen(8000, ()=>{
    console.log("App Running at 8000");
})