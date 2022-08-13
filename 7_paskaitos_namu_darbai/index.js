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

app.get("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("7paskaita")
      .collection("people")
      .find()
      .toArray();
    await con.close();
    console.log(data);
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("7paskaita")
      .collection("people")
      .insertOne(req.body);
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
