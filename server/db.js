const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
      console.log('Erro connecting to database...', err)
      return
  }
  console.log('Connection established!');
})

module.exports = db;
