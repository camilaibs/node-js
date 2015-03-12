var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	
	var url = request.url;
	switch(url){
		case '/':
			response.write('<h1>Página Principal</h1>');
			break;
		case '/bemvindo':
			response.write('<h1>Bem-vindo :)</h1>');
			break;
		default:
			response.write('<h1>Página não encontrada :(</h1>');
	}
	response.end();
});

server.listen(3000, function(){
	console.log('Servidor rodando!')
});