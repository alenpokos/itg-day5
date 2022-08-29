const mysql = require('mysql')
const express = require('express');
const app = express();
const path = require("path");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', function(req, res) {
  res.render("10_templates", {ucionica: 12});
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});