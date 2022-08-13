const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;
const uri = process.env.CONNECTION;
const client = new MongoClient(uri);

app.get("/pets", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("8paskaita").collection("pets").find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/pets/:type", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("8paskaita")
      .collection("pets")
      .find({ type: req.params.type })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get("/byoldest", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("8paskaita")
      .collection("pets")
      .find()
      .sort({ age: -1 })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});
app.post("/pets", async (req, res) => {
  try {
    const con = await client.connect(); // Prisijungiam prie data base
    const dataBaseResponse = await con
      .db("8paskaita")
      .collection("pets")
      .insertOne(req.body);
    await con.close();
    return res.send(dataBaseResponse);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
