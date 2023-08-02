const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.redirect("/");
});

app.post("/orders", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  res.json(requestBody);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
