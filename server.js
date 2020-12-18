//server.jsconst express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
// app.use(favicon(__dirname + '/dist/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', function(req, res) {
  return res.send('pong');
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port);
