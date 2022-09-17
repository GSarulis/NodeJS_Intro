const express = require(`express`);
const mysql = require(`mysql2/promise`);
const router = express.Router();

const { dbconfig } = require(`../config`);

router.get(`/`, async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(`SELECT * FROM products ;`);
    await con.end();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT * FROM products WHERE id=${req.params.id} ;`
    );
    await con.end();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
