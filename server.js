// const express = require('express');
// const app = express();
// const data = require('./friend.json');
// const fs = require('fs');
// const data = fs.readFilesync('./friend.json', 'utf-8');
// console.log(data);

// const Myfun = (req, res, next) => {
//     // console.log(req.query);
//     if(req.query.age >= "19")
//     {
//         console.log('Success');
//         next();        
//     }
//     else
//     {
//         res.json({message: "Sorry....."})
//     }
    
// }

// server.use(Myfun); //application

// POST, GET, PUT, PATCH, DELETE
// Server.get("/", (req,res)=>{
//     res.write('Welcome to Express Server');
//     res.end();
// })

// serever.get("/login", Myfun, (req,res)=>{
//     res.write('Welcome to Login Page');
//     res.end();
// })

// Server.post("/", (req,res)=>{
//     // res.write('Welcome to Post Method');
//     res.send('<h1>Send Method</h1>');
// })

// server.listen(2304, () => {
//     console.log('server start at http://localhost:2304');
// })