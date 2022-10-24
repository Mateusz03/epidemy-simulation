const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const simulation = require("./simulation/simulation");
const app = express();
const PORT = 3001;
const { Insert, Select, Delete, Update } = require("./mongodb");

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

app.post("/update", async (req, res) => {
  res.send(
    await Update({
      id: req.body.body.id,
      obj: await simulation.startSimulation(req.body.body.data),
    }),
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
