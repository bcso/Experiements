const express = require('express');
const app = express();
const port = process.env.port || 3000;

// dist contains our webpack-bundled html and js files
// set the node environment to production

app.listen(port, e => {
    if (e) throw e;
    console.log("Server created on " + port);
});