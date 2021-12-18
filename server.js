const http = require('http');
const fs = require('fs');
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // fs.createReadStream('public/index.html').pipe(res);
    res.end(fs.readFileSync('public/index.html'));
});

server.listen(port);