const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(function (req, res) {
  res.status(404).send("404: Page not found");
});

app.listen(port, function () {
  console.log("App running");
});
