const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("work");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
