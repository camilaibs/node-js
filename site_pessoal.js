var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	// __dirname = constante com o diretório raiz
	fs.readFile(__dirname + '/index.html', function(erro, html){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	});
});

server.listen(3000, function(){
	console.log('Executando Site Pessoal');
});