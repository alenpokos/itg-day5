const mysql = require('mysql')
const express = require('express');
const app = express();
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'itgday5'
});
connection.connect()

app.get('/', function(req, res) {
  connection.query('SELECT * FROM messages;', (err, rows, fields) => {
    if (err){ throw err; }
    res.render("13_messages", {rows: rows});
  });
});

app.post('/', function (req, res) {
  let message = req.body.message;
  connection.query(`INSERT INTO messages (message) VALUES ('${message}')`, (err, rows, fields) => {
    if (err){ throw err; }
    res.redirect('/');
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
