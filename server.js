var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;
var app = express();

app.set('port', (process.env.PORT | 3000));

app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});