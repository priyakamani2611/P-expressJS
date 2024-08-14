const products = require("../products.json");

exports.addnewproduct = (req,res) =>{
    console.log(req.body);
    products.push(req.body);
    res.json({message:"product added success"});

};

exports.getallproducts=(req,res)=>{
    res.json(products);
};

exports.getproduct = (req,res) =>{
    let id = +req.params.id;
    let item = products.find((product) => product.id === id);
    res.json(item);
};

exports.replaceproduct = (req,res) =>{
    let id = +req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex,1,req.body);
    res.json({message:"product replaced success"});
};

exports.updateproduct = (req,res) =>{
    let id = +req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    let product = products[productindex];
    products.splice(productindex,1,{...product,...req.body});
    res.json({message:"product update success"});
};

exports.deleteproduct = (req,res) =>{
    let id = +req.params.id;
    let productindex = products.findIndex((item) => item.id === id);
    products.splice(productindex,1);
    res.json({message:"product deleted success"});
};