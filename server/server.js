const express = require('express');
const app = express();
const port = process.env.port || 3002;

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, you\'ve hit the base route for server');
});

app.listen(port, e => {
    if (e) throw e;
    console.log("Server created on " + port);
});