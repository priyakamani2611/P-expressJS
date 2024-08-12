const express = require("express");
    const morgan = require("morgan");
    const app = express();
    const users = require("../D_backend/MONGODB/books.json");
    
    // console.log(user);

    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    

    app.get("/",(req,res)=>{
      res.send("welcome to express server");
    });

    // crud

    // create server

    app.post("/user",(req,res) =>{
      // console.log(req.body);
      users.push(req.body);
      res.json({message :"user added success"});
    });
    // read - get all users
    app.get("/user",(req,res)=>{
      res.json(users);
    });

    // get singal user

    app.get("/user/:id",(req,res)=>{
      let id = +req.params.id;
      let item=user.find((user)=>user.id===id);
      res.json(item);
    });

    // replace data-put

    app.put("/user/:id",(req,res)=>{
      let id=+req.params.id;
      let userindex =user.findindex((item)=>item.id===id);
      users.splice(userindex,1,req.body);
      res.json({message :"user replaced success"});
    });

    // update data -patch

    app.patch("/user/:id",(req,res)=>{
      let id = +req.params.id;
      let userindex = user.findindex((item)=>item.id===id);
      let user = users[userindex];
      user.splice(userindex,1,{...user,...req.body});
      res.json({message :"user updated success"});
    });

    // delete data-delete

    app.delete("/user/:id",(req,res)=>{
      let id = +req.params.id;
      let userindex = users.findindex((item)=>item.id===id);
      users.splice(userindex,1);
      res.json({message :"user deleted success"});

    });

    app.listen(1221,()=>{
      console.log("server start at http://localhost:1221");
    });
