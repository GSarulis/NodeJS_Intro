// prisideti importus reikalingus express serveriui
// susikurti express serveri
// susikurti API su /users path kuris grazins users masyva
// susikurti API su /links path kuris grazins links masyva
// paleisti serveri

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const users = ["admin"];
app.use(express.json());
app.use(cors());
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
