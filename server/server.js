const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/simulations", (req, res) => {});

app.post("/addSimulation", (req, res) => {
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
