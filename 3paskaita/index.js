const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

// "/" - base path ( pagrindinis kelias) pvz.: localhost:3000/
// req - sutrumpinimas request zodzio. Kvietimas is vartotojo puses
// res - sutrumpinimas response zodzio. Grazinimas is serverines dalies

app.use(cors());

app.get("/", (req, res) => {
  res.send(["BMW", "VW", "AUDI", "BENTLEY"]);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
