const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());
const port = process.env.PORT || 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Define a route to get data
app.get("/api/araclar", (req, res) => {
  connection.query("SELECT * FROM araclar", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
