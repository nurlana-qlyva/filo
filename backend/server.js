const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.get("/araclar", (req, res) => {
  const sql = "SELECT * FROM araclar";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("Data retrieved:", data);
    return res.json(data);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
