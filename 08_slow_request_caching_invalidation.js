const request = require('request');
const express = require('express');
const app = express();

let cacheValue = null;
let cacheValueExpires = 0;

app.get('/', function(req, res) {
  const startTime = (new Date()).toLocaleTimeString();
  if(null === cacheValue || cacheValueExpires === 0) {
    request("http://localhost:3000/slow", {}, function (error, response, body) {
      res.send(`Dobio sam ${body}. <br>start ${startTime}<br>end ${(new Date()).toLocaleTimeString()}`);
      cacheValue = body;
      cacheValueExpires = 5;
    });
  } else {
    res.send(`Iz CACHE-a ${cacheValue}. <br>start ${startTime}<br>end ${(new Date()).toLocaleTimeString()}`);
    cacheValueExpires = cacheValueExpires - 1;
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
