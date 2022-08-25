const express = require('express');
const app = express();

app.get('/', function(req, res) {
  // saljemo poseban cache controll header koji kaže pregledniku da smije spremiti sadrzaj na 20 sekundi
  res.set('Cache-control', 'public, max-age=20');
  res.send((new Date()).toLocaleTimeString());
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
