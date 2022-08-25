const express = require('express');
const app = express();

let visitCounter = 0;

app.get('/', function(req, res) {
  visitCounter = visitCounter + 1; // na svaki poziv uvecamo lokalnu varijablu
  res.send(`You visited this page ${visitCounter} times`);

});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
