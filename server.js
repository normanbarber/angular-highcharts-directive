var express = require('express');
var app = new express();
var path = require('path');
var restify = require('restify');
var cors = require('cors');
var self = this;

/* configure express */
app.configure(function(){
    app.set('port', process.env.PORT || 5555);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(app.router);
    app.use(cors());
});

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
rest.listen(8877, function() {
    console.log('rest api listening: %s', rest.url);
});