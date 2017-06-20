'use strict';

// include application modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // process.en.PORT exists in .bashrc

app.use(express.static('./public'));

// create route
// at our homepage '/', serve index.html file
app.get('/', function(req, res) {
  console.log('whats up');
  res.sendFile('./index.html');
})

app.listen(PORT, function() {
  console.log('currently listening on port:', PORT);
});
