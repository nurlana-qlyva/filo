require('dotenv').config();
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var whitelist = ["http://localhost:5173", "https://efilo.netlify.app"];
var corsOptions = { origin: whitelist, credentials: true };
app.use(cors(corsOptions));

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

console.log(process.env.DB_HOST)

app.get("/", (req, res) => {
  return res.json("From backend side");
});

app.get("/araclar", (req, res) => {
  const sql = "SELECT * FROM araclar";
  pool.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("Data retrieved:", data);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
