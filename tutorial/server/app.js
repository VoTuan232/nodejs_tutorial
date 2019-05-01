var http = require('http');

var fs = require('fs');

/*readable stream*/
var myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
/*writeable stream*/
var myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

/*No use Pipe*/
// myReadStream.on('data', function(chunk) {
// 	console.log('new chunk received: ');
// 	myWriteStream.write(chunk); //quicker
// })

/* Use Pipe */
myReadStream.pipe(myWriteStream);

/*create server*/
var server = http.createServer(function (request, response) { 
	console.log('request is made: ' + request.url);
	// return txt data
	// response.writeHead(200, {   'Content-Type': 'text/plain'   });   
	// var myReadStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
	// myReadStream.pipe(response);

	// return html data
	// response.writeHead(200, {   'Content-Type': 'text/html'   });   
	// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
	// myReadStream.pipe(response);

	// return json data
	// response.writeHead(200, {   'Content-Type': 'application/json'   });   
	// var myObj = {
	// 	name: 'Tuan',
	// 	job: 'IT', 
	// 	age: 23,
	// }
	// response.end(JSON.stringify(myObj));

	// response.writeHead(200, {   'Content-Type': 'text/plain'   });   
	// response.end('hello world'); 

	/*url*/
	if (request.url === '/home' || request.url === '/') {
		response.writeHead(200, {   'Content-Type': 'text/html'   });   
		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
	} 
	else {
		response.writeHead(200, {   'Content-Type': 'text/html'   });   
		fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
	}
}).listen(8080); 