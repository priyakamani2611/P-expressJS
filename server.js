// const express = require('express');
// const server =express();

// const morgan = require('morgan');
// server.use(morgan('dev'));
// const loggerFun = (req, res, next)=>{
//  console.log(req.ip, req.url, reg.method)
// next();
// }

// server.use(loggerFun);
// in built middelware

// server.use(express.json());
//  server.use(express.urlencoded({extended: false}));
//  server.use("/hello", express.static('public'))

//   const myfun = (req,res,next)=>{
//     console.log(req.body);
//     next();
//   }

//   if(req.body.age >="18"){
//     console.log('success');
//     next();
//     }else{
//         req.json({message:"sorry  brother....."});
// }

// server.use(myfun);//application

//post,get,put,patch,delete

//  server.get("/", (req, res) => {
//      res.write("Welcome to Express Server");
//      res.end();
//    } );

//    server.get("/login", myFun, (req, res)=>{
//     res.write("Welcome to Login Page");
//     res.end(); 41
//     });

//     server.post("/", (req, res)=>{
//          //res.write("Welcome to Post Method);
//          res.send("<h1>POST METHOD</h1>");
//     })

//     server.listen(5555,()=>{
//         console.log('server start at http://localhost:5555');
//     });