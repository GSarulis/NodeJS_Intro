const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // kai daromas post pareitu JSON formatu
app.use(cors()); // apsauga

const { port } = require(`./config`);

const products = require(`./routes/products`);

app.use(`/products/`, products);

app.get(`/`, (req, res) => {
  res.send({ msg: `Server is running` });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
