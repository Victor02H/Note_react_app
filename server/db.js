const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '123456',
  database: 'note_app',
  port: 3306
});

db.connect((err) => {
  if (err) {
      console.log('Erro connecting to database...', err)
      return
  }
  console.log('Connection established!')
})

module.exports = db;
