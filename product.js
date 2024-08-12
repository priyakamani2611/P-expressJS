// console.log(product);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome to express server");
});

// crud

// create product

app.post("/product", (req, res) => {
  // console.log(req.body);
  products.push(req.body);
  res.json({ message: "product added success" });
});

// read - get all products
app.get("/product", (req, res) => {
  res.json(products);
});

// get single product

app.get("/product/:id", (req, res) => {
  let id = +req.params.id;
  let item = products.find((product) => product.id === id);
  res.json(item);
});

// replace data-put

app.put("/product/:id", (req, res) => {
  let id = +req.params.id;
  let productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, req.body);
  res.json({ message: "product replaced success" });
});

// update data -patch

app.patch("/product/:id", (req, res) => {
  let id = +req.params.id;
  let productIndex = products.findIndex((item) => item.id === id);
  let product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.json({ message: "product updated success" });
});

// delete data-delete

app.delete("/product/:id", (req, res) => {
  let id = +req.params.id;
  let productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1);
  res.json({ message: "product deleted success" });
});

app.listen(1221, () => {
  console.log("server start at http://localhost:1221");
});