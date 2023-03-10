const db = require("./db");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM annotations", (err, rows) => {
    if (err) return console.log(err);

    res.status(200).json(rows);
  });
})

app.post("/add-annotation", (req, res) => {
  const userAnnotation = req.body.annotation;

  db.query("INSERT INTO annotations (annotation) VALUES (?)", [userAnnotation], (err) => {
    if (err) return res.send(err);
  });
})

app.delete("/annotation/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM annotations WHERE id=?", id, (err) => {
    if (err) return res.send(err);
  });
})

app.put("/annotation/:id", (req, res) => {
  const id = req.params.id;
  const userAnnotation = req.body.annotation;

  db.query(`UPDATE annotations SET annotation='${userAnnotation}' WHERE id=${id}`, (err) => {
    if (err) return res.send(err);
  });
})

/* REGISTER ROUTES */
app.post("/register-user", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [userName, userEmail, userPassword], (err) => {
    if (err) return res.send(err);
  });
})

/* LOGIN ROUTES */
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, rows) => {
    if (err) return res.send(err);

    res.status(200).json(rows);
  });
})

app.listen(3001);
