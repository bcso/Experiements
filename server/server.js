const express = require('express');
const app = express();
const port = process.env.port || 3000;

// dist contains our webpack-bundled html and js files
// set the node environment to production
if (process.env.NODE_ENV === "production")
{
    app.use(express.static('dist'));
}

app.listen(port, e => {
    if (e) throw e;
    console.log("Server created on " + port);
});