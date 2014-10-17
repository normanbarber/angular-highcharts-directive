var express = require('express');
var app = new express();
var path = require('path');
var restify = require('restify');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');
var self = this;

var app = express();
var restport = 8001;

/* configure express */
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jade');
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

/* start express */
var server = app.listen(app.get('port'), function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

/* start the socket */
var io = require('socket.io')(server);
this.chartserver = io.of('/io_chartserver');

/* start the rest */
var rest = restify.createServer({
	name: 'chart example'
});
rest.use(restify.bodyParser());

self.chartserver.on('connection', function(socket){
	socket.on('connected', function(){
		console.log('client handshake completed');
	});
});

rest.post('/chart', function(req, res, next) {
	self.chartserver.emit('data_change', req.body);
	res.end();
});

rest.listen(restport, function() {
	console.log('rest api listening: %s', rest.url);
});