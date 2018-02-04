const server = require('http').createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello, My First Server! @ v@</h1>')

}).listen(8080, () => {
	console.log('Server Running at http://127.0.0.1:8080')
})