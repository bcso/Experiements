const express = require('express');
const app = express();
const port = process.env.port || 3000;
const fs = require('fs');

// dist contains our webpack-bundled html and js files
// set the node environment to production
app.use(express.static('dist'));

app.get('/', (_, res) => {
    res.writeHead(200);
    fs.createWriteStream('dist/index.html').pipe(res);
});

// For any paths that we can't serve, just serve the root path of client
app.get('*', (_, res) => {
    res.writeHead(302);
    res.redirect('/');
});

app.use((err, req, res, next) => {
    if (err) {
        console.log("Errored out with: " + err);
    }
});

app.listen(port, e => {
    if (e) throw e;
    console.log("Server created on " + port);
});