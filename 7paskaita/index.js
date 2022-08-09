const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MongoClient } = require("mongodb");
const URI = `mongodb+srv://new-user:${process.env.PASSWORD}@addcars.giter2j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(URI);
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("demo1").collection("cars").find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const con = await client.connect();
    const dbRes = await con.db("demo1").collection("cars").insertOne(req.body);
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
