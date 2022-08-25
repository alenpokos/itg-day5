const request = require('request');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  // pozivamo json podatke sa HNB-ovog API-ja
  request("https://api.hnb.hr/tecajn/v1?valuta=EUR", {json: true}, function (error, response, body) {
    res.send(`Srednji za devize tečaj Eura je ${body[0]['Srednji za devize']}`);
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
