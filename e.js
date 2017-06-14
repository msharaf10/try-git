var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('test indent');
});

app.get('/indent', function(req,res){
    res.send('indent = 4');
});
