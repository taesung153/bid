var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client'));

require('./server/Config/mongoose.js');
require('./server/Config/routes.js')(app);

app.listen(8000, function(){
	console.log("localhost : 8000");
});
