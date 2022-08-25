const express = require('express');
const app = express();

app.get('/', function(req, res) {
  // ispišemo trenutno vrijeme
  res.send((new Date()).toLocaleTimeString());
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
