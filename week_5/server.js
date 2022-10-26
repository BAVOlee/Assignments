const path = require('path');

const http = require('http');

const fs = require('fs');

const server = http.createServer((request, response) =>
{
	let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)

	let contentType = getContentType(filePath) || 'text/html'

	let emptyPagePath = path.join(__dirname, 'public', '404.html')

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			if (err.code === 'ENOENT') {
				fs.readFile(emptyPagePath, 'utf8', (err, data) => {
					response.writeHead(200, {'Content-Type' : contentType})
					response.end(data)
				})
			}else {
				response.writeHead(500)
				response.end('A server error has occurred')
			}
		}

		if (!err) {
			response.writeHead(200, {'Content-Type': contentType})
			response.end(data)
		}
	})
})

let getContentType = (filePath) => {
	let extname = path.extname(filePath)
	if(extname === '.js') {
		return 'text/javascript'
	}
	if(extname === '.css') {
		return 'text/css'
	}
	if(extname === '.png') {
		return 'image/png'
	}
	if(extname === '.jpg') {
		return 'image/jpg'
	}
}

const port = 2000;

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
})
