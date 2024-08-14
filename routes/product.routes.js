const express = require("express");
const productRoutes = express.Router();

const { addNewProduct, getAllProducts, replaceProduct, updateProduct, deleteProduct } = require("../controller/product.controllers");

productRoutes.post("/", addNewProduct);

productRoutes.get("/", getAllProducts);

productRoutes.get("/:id", getProduct);

productRoutes.put("/:id", replaceProduct);

productRoutes.patch("/:id", updateProduct);

productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;