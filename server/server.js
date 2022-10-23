const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const simulation = require("./simulation/simulation");
const app = express();
const PORT = 3001;
const { Insert, Select, Delete } = require("./mongodb");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/addSimulation", async (req, res) => {
  res.send(await Insert(await simulation.startSimulation(req.body.body)));
});

app.post("/loadSimulation", async (req, res) => {
  res.send(await Select());
});

app.post("/delete", async (req, res) => {
  res.send(await Delete(req.body.id));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
