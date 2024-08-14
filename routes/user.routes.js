const express =require("express");
const userroutes = express.Router();

const{ addnewuser, 
    // getalluser, 
    // replaceuser, 
    // updateuser, 
    // deleteuser 
    } = require("../controller/user.controllers");

userroutes.post("/",addnewuser);

// userroutes.get("/",getallusers);

// userroutes.get("/:id",getuser);

// userroutes.put("/:id",replaceuser);

// userroutes.patch("/:id",updateuser);

// userroutes.delete("/:id",deleteuser);

module.exports=userroutes;