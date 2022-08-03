const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

const users = [];
const links = [];
const newPerson = [];

app.use(express.json());
app.use(cors());

app.get("/new", (req, res) => {
  res.send(newPerson);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/links", (req, res) => {
  res.send(links);
});

app.post("/new", (req, res) => {
  console.log(req.body);
  newPerson.push(req.body.userFirstName);
  newPerson.push(req.body.userLastName);
  res.send(req.body);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  users.push(req.body.user);
  res.send(req.body);
});

app.post("/links", (req, res) => {
  console.log(req.body);
  links.push(req.body.link);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
