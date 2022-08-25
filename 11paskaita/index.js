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

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    console.log("Success: " + con);

    con.execute('')

    res.send("Success");
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
