const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");
var whitelist = [
  "http://localhost:5173",
  "https://efilo.netlify.app",
];
var corsOptions = { origin: whitelist, credentials: true };
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0212",
  database: "filo",
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

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
