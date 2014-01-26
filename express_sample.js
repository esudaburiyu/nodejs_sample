var express = require('express');
var app = express();

app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT, process.env.IP);
// app.listen(3000);
console.log("server starting...");
