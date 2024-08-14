// const user = require("../books.json");

const User = require("../model/user.model");

exports.addnewuser = async(req,res) =>{
    try{
        const user= await User.create(req.body);
        res.status(201).json({user, message:"user created successfully"});
    }catch (err){
        console.log(err);
        res.status(500).json({message:'internal servel error'});
    }
};

// exports.addnewuser = (req,res) =>{
//     console.log(req.body);
//     user.push(req.body);
//     res.json({message:"user added success"});

// };

// exports.getalluser=(req,res)=>{
//     res.json(user);
// };

// exports.getuser = (req,res) =>{
//     let id = +req.params.id;
//     let item = users.find((user) => user.id === id);
//     res.json(item);
// };

// exports.replaceuser = (req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id === id);
//     users.splice(userindex,1,req.body);
//     res.json({message:"user replaced success"});
// };

// exports.updateuser = (req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id === id);
//     let user =user[userindex];
//     users.splice(userindex,1,{...user,...req.body});
//     res.json({message:"user update success"});
// };

// exports.deleteuser = (req,res) =>{
//     let id = +req.params.id;
//     let userindex = users.findIndex((item) => item.id === id);
//     users.splice(userindex,1);
//     res.json({message:"user replaced success"});
// };


