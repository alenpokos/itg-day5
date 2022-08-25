const request = require('request');
const express = require('express');
const app = express();

let cacheValue = null;

app.get('/', function(req, res) {
  const startTime = (new Date()).toLocaleTimeString();
  if(null === cacheValue) { // ako nemamo vrijednost onda radimo request
    request("http://localhost:3000/slow", {}, function (error, response, body) {
      res.send(`Dobio sam ${body}. <br>start ${startTime}<br>end ${(new Date()).toLocaleTimeString()}`);
      cacheValue = body; // obavezno spremimo vrijednost
    });
  } else {
    // sada imamo vrijednost iz cache-a
    res.send(`Iz CACHE-a ${cacheValue}. <br>start ${startTime}<br>end ${(new Date()).toLocaleTimeString()}`);
  }
});

app.get('/slow', function(req, res) {
  setTimeout(function() {
    res.send('PUŽ');
  }, 5000);

});

app.listen(3000, function() {
  console.log("Example app listening on port 3000 (http://localhost:3000)")
});
