const express= require("express");
const morgan = require("morgan");
const app = express();
const users = require("../D_backend/MONGODB/books.json");

console.log(users);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended :false}));

app.get("/",(req,res) =>{
  res.send("welcome to express server");

})

// crud
// crud user

app.post("/user",(req,res) =>{
    console.log(req.body);
    users.push(req.body);
    res.json({message:"user added success"});
});

// read - get all users

app.get("/user",(req,res)=>{
  res.json(users);
});

// get singal user

app.get("/user/:id",(req,res)=>{
  let id = +req.params.id;
  let items=users.find((user)=>user.id===id)
  res.json(item);
});

app.listen(1221 ,() =>{
  console.log(`server start at http://localhost:1221`);
});