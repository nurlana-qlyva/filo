const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require('cors');

app.use(cors());
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0212",
  database: "filo",
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
