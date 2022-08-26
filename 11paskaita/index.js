const express = require("express");
const mysql = require("mysql2/promise");
const PORT = 8080;

const app = express();
app.use(express.json());

const mysqlConfig = {
  host: "mysql-vigi26-do-user-12307122-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_wtSHHDUYFo0tj6w8FMj",
  database: "defaultdb",
  port: "25060",
};

app.get("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const response = await con.execute(
      "SELECT * FROM defaultdb.shirts ORDER BY price ASC LIMIT 3;"
    );

    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.post("/shirts", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const response = await con.execute(
      `INSERT INTO shirts (brand,model,size,price) values ('${shirt.brand}', '${shirt.model}', '${shirt.size}', '${shirt.price}';`
    );

    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
