const express = require("express");
const morgan = require("morgan");

const app = express();

const productRoutes = require('./routes/product.routes');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) =>{
    res.send("welcome to express server");
});

app.use("/product", productRoutes);

app.listen(1221,()=>{
  console.log(`server start at http://localhost:1221`);
});