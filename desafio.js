var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var pathName = url.parse(request.url).path;
	if (pathName === null || pathName === '/') {
		pathName = '/artigos';
	}

	var fileName = __dirname + pathName + '.html';
	if (!fs.existsSync(fileName)) {
		fileName = __dirname + '/erro.html';
	}

	fs.readFile(fileName, function(erro, html){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end(html);
	});
});

server.listen(3000, function(){
	console.log('Servidor iniciado...');
});