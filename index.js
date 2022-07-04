const express = require("express");
const path = require("path");
const mariadb = require("mariadb");

// Setup MariaDB Connection

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 5
});

// Setup MariaDB Queries

async function LookupUser(query) {
  let conn;
  let result;

  try {
    conn = await pool.getConnection();
    result = await conn.query(query);
  }
  
  finally {
    if (conn) conn.release();
    return result;
  }
}

// Setup Express Server Instance

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


app.get("/lobby/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/lobby.html"));
});

app.post("/auth/", (req, res) => {
  (async () => {
    let result = await LookupUser("SHOW DATABASES;");
    res.send(result);
  })()
});

// Listen for Express Server Connections

app.listen(port, () => {
  console.log("Monopoly Websockets Listening on Port " + String(port));
});
