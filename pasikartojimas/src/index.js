const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // kai daromas post pareitu JSON formatu
app.use(cors()); // apsauga

const { port } = require(`./config`);

app.get("*", (req, res) => {
  req.status(404).send(`Page not found`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
