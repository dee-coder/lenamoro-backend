const express = require("express");

const app = express();

const productRoute = require("./src/routes/productsRoute");

app.use("/products", productRoute);
app.listen(1212, () => {
  console.log("Server listening on port:1212");
});
