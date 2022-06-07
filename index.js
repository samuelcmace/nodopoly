const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use("/css/", express.static(path.join(__dirname, "frontend/css/")));
app.use("/js/", express.static(path.join(__dirname, "frontend/js/")));

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/login.html"));
});

app.get("/game/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/game.html"));
});

app.listen(port, () => {
  console.log("Monopoly Websockets Listening on Port " + String(port));
});
