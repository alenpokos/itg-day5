const mysql = require('mysql')
const express = require('express');
const app = express();
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', function(req, res) {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'itgday5'
  });
  connection.connect()

  connection.query('SELECT * FROM messages LEFT JOIN categories ON messages.category = categories.id;', (err, rows, fields) => {
    if (err){ throw err; }

    res.render("12_messages", {rows: rows});
  });

  connection.end()
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
