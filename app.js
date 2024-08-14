const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const userroutes=require('./routes/user.routes');

// console.log(users);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    res.send("welcome to express server");
});

app.use("/api/user", userroutes);

app.listen(1221,()=>{

mongoose
.connect('mongodb://localhost:27017/mydatabase')
.then(()=> console.log("database connection established success..."))
.catch(err=>console.log(err));
console.log(`server start at http://localhost:1221`);

});