var express = require ('express');
var app = express();

var path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);
console.log('Escuchando el puero 80...');