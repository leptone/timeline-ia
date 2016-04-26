var http = require('http')
var ecstatic = require('ecstatic')
var st = ecstatic('public')

var server = http.createServer(function (req, res){
	st(req, res)  // else look in static files
})

server.listen(5000 || process.ENV.PORT)
